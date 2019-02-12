import { State, Action, Selector } from '@ngxs/store';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AuthState, LoginAction, AuthFailedAction, AuthActionNames } from 'app/modules/auth/core';
import { initUserState } from 'app/modules/user/core';
import { AuthAsyncService } from 'app/modules/auth/services';
import { SaveJwtAction } from 'app/core';

@State<AuthState>({
  name: ModuleNameEnum.Auth,
  defaults: initUserState()
})
export class AuthNgxsState {

  constructor(
    private dispatcher: CommandDispatcher,
    private authService: AuthAsyncService
  ) { }

  @Selector()
  static state$(state: AuthState) {
    return state;
  }

  @Action(LoginAction)
  get(action: LoginAction) {
    this.authService.login(action.payload)
      .subscribe( token => {
        const newAction = token.length
          ? new SaveJwtAction(token)
          : new AuthFailedAction(AuthActionNames.LOGIN, 'Login failed!');
        this.dispatcher.fire(newAction);
      });
  }
}
