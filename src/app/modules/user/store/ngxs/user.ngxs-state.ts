import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserState, initUserState, GetUsersAction } from 'app/modules/user/core';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { UserAsyncService } from 'app/modules/user/services';

@State<UserState>({
  name: ModuleNameEnum.User,
  defaults: initUserState()
})
export class UserNgxsState {
  constructor(private userService: UserAsyncService) { }

  @Selector()
  static users$(state: UserState) {
    return state.users;
  }

  @Action(GetUsersAction)
  get({ getState, setState }: StateContext<UserState>, action: GetUsersAction) {
    const state = getState();
    this.userService.getUsers().subscribe( users => {
      setState({
        ...state,
        users: users as []
      });
    });
  }
}
