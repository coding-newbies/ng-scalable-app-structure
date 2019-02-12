import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { AppState, initAppState, SaveJwtAction } from 'app/core';

@State<AppState>({
  name: ModuleNameEnum.App,
  defaults: initAppState()
})
export class AppNgxsState {

  constructor() { }

  @Selector()
  static token$(state: AppState) {
    return state.token;
  }


  @Action(SaveJwtAction)
  get({ getState, setState }: StateContext<AppState>, action: SaveJwtAction) {
    setState({
      ...getState(),
      token: action.payload
    });
  }
}
