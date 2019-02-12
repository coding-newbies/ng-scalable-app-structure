import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppQueries } from 'app/core';

@Injectable()
export class AppNgrxSelectors implements AppQueries {
  public readonly token$ = this.store.select(x => x.app.token);

  constructor(
    protected store: Store<any>
  ) { }
}
