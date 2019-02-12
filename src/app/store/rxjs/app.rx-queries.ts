import { map } from 'rxjs/operators';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { Injectable } from '@angular/core';
import { AppRxStore } from 'app/store/rxjs/app.rx-store';
import { AppQueries } from 'app/core';

@Injectable()
export class AppRxQueries implements AppQueries {
  public readonly token$ = this.store.state$.pipe(
    map( state => state.token)
  );
  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AppRxStore
  ) { }
}
