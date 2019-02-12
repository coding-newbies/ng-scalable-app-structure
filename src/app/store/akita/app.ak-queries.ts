import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { BaseAkQueries, AppAkStore } from 'app/store/akita';
import { AppState, AppQueries } from 'app/core';

export class AppAkQueries extends BaseAkQueries<AppState> implements AppQueries {
  public readonly token$ = this.select(state => state.token);

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AppAkStore
  ) {
    super( store, dispatcher );
  }
}
