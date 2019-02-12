import { Injectable } from '@angular/core';
import { createFeatureSelector, Store } from '@ngrx/store';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { AuthState, AuthQueries } from 'app/modules/auth/core';
import { AppNgrxSelectors } from 'app/store/ngrx';

const getAuthState = createFeatureSelector<AuthState>(
  ModuleNameEnum.Auth
);

@Injectable()
export class AuthNgrxSelectors implements AuthQueries {
  public readonly token$ = this.appSelectors.token$;

  constructor(
    private store: Store<AuthState>,
    private appSelectors: AppNgrxSelectors
  ) { }
}
