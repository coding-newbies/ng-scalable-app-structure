import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { BaseRxStore } from 'app/store/rxjs/base.rx-store';
import { AppActionNames, SaveJwtAction, AppSuccessAction, AppFailedAction } from 'app/core/app.actions';
import { AppState, initAppState } from 'app/core';

@Injectable()
export class AppRxStore extends BaseRxStore<AppState> {
  constructor(
    dispatcher: CommandDispatcher,
  ) {
    super(dispatcher, initAppState());
    this.registerHandlers(this.getActionHandlers());
  }

  public get token$(): Observable<string> {
    return this.state$.pipe( map( state => state.token) );
  }

  getActionHandlers(): Dictionary {
    const handlers = {};
    handlers[AppActionNames.SAVE_JWT] = (action) => this.saveJwt(action);
    handlers[AppActionNames.ACTION_SUCCESS] = (action) => this.successFunction(action);
    handlers[AppActionNames.ACTION_FAILED] = (action) => this.failedFunction(action);
    return handlers;
  }

  saveJwt(action: SaveJwtAction) {
    this.setState({
      ...this.getState(),
      token: action.payload
    });
  }

  successFunction(successAction: AppSuccessAction) {
    console.log(successAction);
  }

  failedFunction(successAction: AppFailedAction) {
    console.log(successAction);
  }
}
