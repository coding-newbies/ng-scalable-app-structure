import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { AuthQueries } from 'app/modules/auth/core/auth-queries.interface';
import { AuthRxStore } from 'app/modules/auth/store/rxjs/auth.rx-store';
import { AppQueries } from 'app/core';

@AutoUnsubscriber()
@Injectable()
export class AuthRxQueries implements AuthQueries {
  public readonly token$ = this.appStore.token$;

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AuthRxStore,
    private appStore: AppQueries,
  ) {
  }
}
