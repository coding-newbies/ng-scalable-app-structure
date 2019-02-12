import { NgModule } from '@angular/core';
import { AuthAkStore, AuthAkQueries } from 'app/modules/auth/store/akita';
import { AuthQueries } from 'app/modules/auth/core';

@NgModule({
  imports: [],
  providers: [
    AuthAkStore,
    {
    provide: AuthQueries,
    useClass: AuthAkQueries
    }
  ]
})
export class AuthAkStoreModule {}
