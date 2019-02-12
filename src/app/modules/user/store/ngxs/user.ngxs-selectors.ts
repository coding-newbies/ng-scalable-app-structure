import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserNgxsState } from './user.ngxs-state';
import { UserQueries } from 'app/modules/user/core';

@Injectable()
export class UserNgxsSelectors implements UserQueries {
  @Select(UserNgxsState.users$) users$: Observable<any[]>;

  constructor() { }
}
