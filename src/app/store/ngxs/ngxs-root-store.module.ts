import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AppNgxsState, NgxsDispatcher } from 'app/store/ngxs';
import { AppNgrxSelectors } from 'app/store/ngrx';
import { AppQueries } from 'app/core';

@NgModule({
  imports: [
    NgxsModule.forRoot([AppNgxsState])
  ],
  exports: [
    NgxsModule
  ]
})
export class NgxsRootStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxsRootStoreModule,
      providers: [{
          provide: CommandDispatcher,
          useClass: NgxsDispatcher
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
