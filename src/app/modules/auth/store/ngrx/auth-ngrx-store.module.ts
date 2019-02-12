import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { AuthNgrxReducer, AuthNgrxEffects, AuthNgrxSelectors } from 'app/modules/auth/store/ngrx';
import { AuthQueries } from 'app/modules/auth/core';

@NgModule({
  imports: [
    StoreModule.forFeature(ModuleNameEnum.Auth, AuthNgrxReducer),
    EffectsModule.forFeature([AuthNgrxEffects])
  ],
  providers: [{
    provide: AuthQueries,
    useClass: AuthNgrxSelectors
  }]
})
export class AuthNgrxStoreModule {}
