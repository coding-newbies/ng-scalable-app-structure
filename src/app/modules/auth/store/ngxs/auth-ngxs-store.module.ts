import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AuthQueries } from 'app/modules/auth/core';
import { AuthNgxsState, AuthNgxsSelectors } from 'app/modules/auth/store/ngxs';

@NgModule({
  imports: [
    NgxsModule.forFeature([AuthNgxsState])
  ],
  providers: [{
    provide: AuthQueries,
    useClass: AuthNgxsSelectors
  }]
})
export class AuthNgxsStoreModule {}
