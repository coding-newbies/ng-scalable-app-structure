import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AkDispatcher, AppAkStore } from 'app/store/akita';
import { AppQueries } from 'app/core';

@NgModule({
  imports: [
    CommonModule,
    AkitaNgDevtools.forRoot()
  ]
})
export class AkitaRootStoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AkitaRootStoreModule,
      providers: [
        {
          provide: CommandDispatcher,
          useClass: AkDispatcher
        },
        AppAkStore,
        {
          provide: AppQueries,
          useExisting: AppAkStore,
        }
      ]
    };
  }
}
