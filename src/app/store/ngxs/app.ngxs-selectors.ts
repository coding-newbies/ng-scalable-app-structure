import { Store, Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppQueries } from 'app/core';
import { AppNgxsState } from 'app/store/ngxs';

@Injectable()
export class AppNgxsSelectors implements AppQueries {
  @Select(AppNgxsState.token$) token$: Observable<string>;
  // public readonly token$ = this.store.select(x => x.app.token);

  constructor(
    protected store: Store
  ) { }
}
