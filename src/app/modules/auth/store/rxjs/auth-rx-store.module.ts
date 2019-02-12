import { NgModule } from '@angular/core';
import { AuthRxQueries } from 'app/modules/auth/store/rxjs/auth.rx-queries';
import { AuthRxStore } from 'app/modules/auth/store/rxjs/auth.rx-store';
import { AuthQueries } from 'app/modules/auth/core/auth-queries.interface';

@NgModule({
  imports: [],
  providers: [
    AuthRxStore,
    {
      provide: AuthQueries,
      useClass: AuthRxQueries
    }
  ]
})
export class AuthRxStoreModule {}
