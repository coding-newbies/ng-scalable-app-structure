import { Injectable } from '@angular/core';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { GetUsersAction } from 'app/modules/user/core/user.actions';
import { UserQueries } from 'app/modules/user/core/user-queries.interface';

@Injectable()
@AutoUnsubscriber()
export class UserBizModel {
  public readonly users$ = this.queries.users$;
  constructor(
    private queries: UserQueries,
    private dispatcher: CommandDispatcher
  ) {
    // this.dispatcher.actionOfSubType$( UserActionNames.ACTION_SUCCESS, [UserActionNames.GET_USERS]).subscribe(
    //   a => console.log('UserBizModel ', a)
    // );
  }

  fetchAllUsers(): void {
    this.dispatcher.fire(new GetUsersAction());
  }
}
