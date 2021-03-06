import { Injectable } from '@angular/core';
import { createSelector, createFeatureSelector, Store } from '@ngrx/store';
import { UserState, UserQueries } from 'app/modules/user/core';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';

const getUserState = createFeatureSelector<UserState>(
  ModuleNameEnum.User
);

const getUsers = createSelector(
  getUserState,
  (state: UserState) => state.users
);

@Injectable()
export class UserNgrxSelectors implements UserQueries {
  public readonly users$ = this.store.select(getUsers);
  constructor(
    private store: Store<any>
  ) { }
}
