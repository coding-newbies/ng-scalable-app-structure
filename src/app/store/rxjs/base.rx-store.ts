import { filter, tap } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { BehaviorSubject } from 'rxjs';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { Action, GetType } from 'app/core';

export abstract class BaseRxStore<T> {
  private state: T;
  public readonly state$: BehaviorSubject<T>;
  abstract getActionHandlers(): Dictionary;

  constructor(
    protected dispatcher: CommandDispatcher,
    initialState: any
  ) {
    this.state = initialState;
    this.state$ = new BehaviorSubject<T>(this.state);
  }

  protected getState(): T {
    return this.state;
  }

  protected registerHandlers(actionHandlers: Dictionary) {
    this.dispatcher.actions$.pipe(
      filter( (action: Action) => actionHandlers[GetType(action)])
    ).subscribe( action => actionHandlers[GetType(action)](action) );
  }

  protected setState(newState: T) {
    this.state = newState;
    this.state$.next(this.state);
  }
}

