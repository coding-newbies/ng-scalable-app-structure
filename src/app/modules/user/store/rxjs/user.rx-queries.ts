import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { UserQueries } from 'app/modules/user/core';
import { UserRxStore } from 'app/modules/user/store/rxjs/user.rx-store';

@AutoUnsubscriber()
@Injectable()
export class UserRxQueries implements UserQueries {
  public readonly users$ = this.store.state$.pipe(
    map( state => state.users )
  );

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: UserRxStore,
  ) {
  }
}
