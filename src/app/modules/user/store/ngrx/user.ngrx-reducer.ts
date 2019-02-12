import { UserState, initUserState, UserActions, UserActionNames, UserSuccessAction, UserFailedAction } from 'app/modules/user/core';

// reducer
export function UserNgrxReducer(userState: UserState = initUserState(), action: UserActions): UserState {
  switch (action.type) {
    case UserActionNames.ACTION_SUCCESS:
      return actionSuccessReducer(userState, action as UserSuccessAction);
    case UserActionNames.ACTION_FAILED:
      return actionFailReducer(userState, action as UserFailedAction);
    default:
      return userState;
  }
}

function actionSuccessReducer(userState: UserState, action: UserFailedAction): UserState {
  switch (action.subType) {
    case UserActionNames.GET_USERS:
      return {
        ...userState,
        users: action.payload
      };
    default:
      return userState;
  }
}

function actionFailReducer(userState: UserState, action: UserFailedAction): UserState {
  switch (action.subType) {
    default:
      return userState;
  }
}
