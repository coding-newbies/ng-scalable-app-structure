import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { BaseAkQueries } from 'app/store/akita';
import { UserState, UserQueries } from 'app/modules/user/core';
import { UserAkStore } from 'app/modules/user/store/akita';

@Injectable()
export class UserAkQueries extends BaseAkQueries<UserState> implements UserQueries {
  public readonly users$ = this.select(state => state.users);

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: UserAkStore
  ) {
    super( store, dispatcher );
  }
}
