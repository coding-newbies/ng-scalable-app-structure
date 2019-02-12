import { Query, Store } from '@datorama/akita';
import { filter } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { Action, GetType } from 'app/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';

export abstract class BaseAkQueries<T> extends Query<T> {
  constructor(
    protected store: Store<T>,
    protected dispatcher: CommandDispatcher
  ) {
    super(store);
  }

  protected registerHandlers(actionHandlers: Dictionary) {
    this.dispatcher.actions$.pipe(
      filter( (action: Action) => actionHandlers[GetType(action)])
    ).subscribe( action => actionHandlers[GetType(action)](action) );
  }
}

