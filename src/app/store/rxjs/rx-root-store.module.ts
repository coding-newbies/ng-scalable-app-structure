import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AppQueries } from 'app/core/app-queries.interface';
import { RxDispatcher } from 'app/store/rxjs/rx.dispatcher';
import { AppRxQueries } from 'app/store/rxjs/app.rx-queries';
import { AppRxStore } from 'app/store/rxjs/app.rx-store';

@NgModule()
export class RxRootStoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RxRootStoreModule,
      providers: [
        {
          provide: CommandDispatcher,
          useClass: RxDispatcher
        },
        AppRxStore,
        {
          provide: AppQueries,
          useClass: AppRxQueries,
        }
      ]
    };
  }
}
