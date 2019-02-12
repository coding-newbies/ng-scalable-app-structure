import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { BehaviorSubject } from 'rxjs';
import { AutoUnsubscriber, Unsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { AuthActionNames, AuthFailedAction, AuthSuccessAction, LoginAction } from 'app/modules/auth/core/auth.actions';
import { LoginCredentials } from 'app/modules/auth/models';
import { AuthQueries } from 'app/modules/auth/core/auth-queries.interface';

@Injectable()
@AutoUnsubscriber()
export class AuthBizModel {
  private unsubscriber = new Unsubscriber();
  constructor(
    private queries: AuthQueries,
    private dispatcher: CommandDispatcher
  ) {
    this.unsubscriber.safeSubscriptions([
      this.dispatcher
        .actionOfSubType$(
          AuthActionNames.ACTION_FAILED,
          [AuthActionNames.LOGIN]
        ).subscribe((act: AuthFailedAction) => this.loginErrorMsg$.next(act.payload as string)),
      this.dispatcher
        .actionOfSubType$(
          AuthActionNames.ACTION_SUCCESS,
          [AuthActionNames.LOGIN]
        ).subscribe( (act: AuthSuccessAction) => this.loginErrorMsg$.next(''))
    ]);
  }

  public readonly token$ = this.queries.token$;
  public readonly loginErrorMsg$ = new BehaviorSubject<string>('');

  login(loginCreds: LoginCredentials): void {
    this.dispatcher.fire(new LoginAction(loginCreds));
  }
}
