import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppNgrxReducer, AppNgrxEffects, NgrxDispatcher, AppNgrxSelectors } from 'app/store/ngrx';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AppQueries } from 'app/core';

@NgModule({
  imports: [
    StoreModule.forRoot({
      app: AppNgrxReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 //  Buffers the last 10 states
    }),
    EffectsModule.forRoot([AppNgrxEffects])
  ],
  exports: [
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule
  ]
})
export class NgrxRootStoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgrxRootStoreModule,
      providers: [
        {
          provide: CommandDispatcher,
          useClass: NgrxDispatcher
        },
        AppNgrxSelectors,
        {
          provide: AppQueries,
          useExisting: AppNgrxSelectors,
        }
      ]
    };
  }
}
