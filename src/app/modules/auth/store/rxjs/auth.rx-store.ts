import { Dictionary } from 'extension';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { BaseRxStore } from 'app/store/rxjs';
import { AuthAsyncService } from 'app/modules/auth/services';
import { SaveJwtAction } from 'app/core';
import { AuthState, AuthActionNames, LoginAction, AuthSuccessAction, AuthFailedAction } from 'app/modules/auth/core';
import { initUserState, UserActionNames, UserSuccessAction, UserFailedAction } from 'app/modules/user/core';

@AutoUnsubscriber()
@Injectable()
export class AuthRxStore extends BaseRxStore<AuthState> {
  constructor(
    protected dispatcher: CommandDispatcher,
    private authService: AuthAsyncService
  ) {
    super( dispatcher, initUserState() );
    this.registerHandlers(this.getActionHandlers());
  }

  getActionHandlers(): Dictionary {
    const handlers = {};
    handlers[AuthActionNames.LOGIN] = (action) => this.login(action);
    handlers[UserActionNames.ACTION_SUCCESS] = (action) => this.successFunction(action);
    handlers[UserActionNames.ACTION_FAILED] = (action) => this.failedFunction(action);
    return handlers;
  }

  login(action: LoginAction) {
    this.authService.login(action.payload).pipe(
      tap( token => !!token.length && this.dispatcher.fire(new SaveJwtAction(token)) )
    ).subscribe( token => {
      const act = !!token.length
        ? new AuthSuccessAction(AuthActionNames.LOGIN, token)
        : new AuthFailedAction(AuthActionNames.LOGIN, 'Login failed!');
      this.dispatcher.fire(act);
    });
  }

  successFunction(successAction: UserSuccessAction) {
    console.log(successAction);
  }

  failedFunction(failedAction: UserFailedAction) {
    console.log(failedAction);
  }
}
