import { Store, Actions } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseDispatcher, CommandDispatcher } from 'app/modules/shared/dispatchers';
import { Action } from 'app/core';

@Injectable()
export class NgxsDispatcher extends BaseDispatcher implements CommandDispatcher {
  public readonly actions$ = this.actions as Observable<Action>;
  public fire = (action: Action) => this.store.dispatch(action);

  constructor(
    private store: Store,
    private actions: Actions
  ) { super(); }
}
