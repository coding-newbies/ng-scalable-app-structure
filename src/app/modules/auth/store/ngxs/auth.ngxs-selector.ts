import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createFeatureSelector, Store } from '@ngrx/store';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { Select } from '@ngxs/store';
import { AuthState, AuthQueries } from 'app/modules/auth/core';
import { AppNgxsState } from 'app/store/ngxs';

const getAuthState = createFeatureSelector<AuthState>(
  ModuleNameEnum.Auth
);

@Injectable()
export class AuthNgxsSelectors implements AuthQueries {
  @Select(AppNgxsState.token$) token$: Observable<string>;

  constructor() { }
}
