import { Dictionary } from 'extension';
import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { BaseAkStore } from 'app/store/akita';
import { AuthState, initAuthState, AuthActionNames, LoginAction, AuthFailedAction, AuthSuccessAction } from 'app/modules/auth/core';
import { AuthAsyncService } from 'app/modules/auth/services';
import { SaveJwtAction } from 'app/core';

@AutoUnsubscriber()
@Injectable()
export class AuthAkStore extends BaseAkStore<AuthState> {
  constructor(
    dispatcher: CommandDispatcher,
    private authService: AuthAsyncService
  ) {
    super( dispatcher, initAuthState() );
    this.registerHandlers(this.getActionHandlers());
  }

  getActionHandlers(): Dictionary {
    const handlers = {};
    handlers[AuthActionNames.LOGIN] = (action) => this.login(action);
    handlers[AuthActionNames.ACTION_SUCCESS] = (action) => this.successFunction(action);
    handlers[AuthActionNames.ACTION_FAILED] = (action) => this.failedFunction(action);
    return handlers;
  }

  login(action: LoginAction) {
    this.authService.login(action.payload)
      .subscribe( token => {
        const newAction = token.length
          ? new SaveJwtAction(token)
          : new AuthFailedAction(AuthActionNames.LOGIN, 'Login failed!');
        this.dispatcher.fire(newAction);
      });
  }

  successFunction(successAction: AuthSuccessAction) {
    console.log(successAction);
  }

  failedFunction(failedAction: AuthFailedAction) {
    console.log(failedAction);
  }
}
