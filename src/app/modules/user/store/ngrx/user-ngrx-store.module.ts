import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { UserNgrxReducer, UserNgrxEffects, UserNgrxSelectors } from 'app/modules/user/store/ngrx';
import { UserQueries } from 'app/modules/user/core';

@NgModule({
  imports: [
    StoreModule.forFeature(ModuleNameEnum.User, UserNgrxReducer),
    EffectsModule.forFeature([UserNgrxEffects])
  ],
  providers: [{
    provide: UserQueries,
    useClass: UserNgrxSelectors
  }]
})
export class UserNgrxStoreModule {}
