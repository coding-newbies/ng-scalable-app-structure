import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { BaseAkQueries, AppAkQueries } from 'app/store/akita';
import { AuthState, AuthQueries } from 'app/modules/auth/core';
import { AuthAkStore } from 'app/modules/auth/store/akita';

@AutoUnsubscriber()
@Injectable()
export class AuthAkQueries extends BaseAkQueries<AuthState> implements AuthQueries {
  public readonly token$ = this.appQueries.token$;

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AuthAkStore,
    private appQueries: AppAkQueries,
  ) {
    super( store, dispatcher );
  }
}
