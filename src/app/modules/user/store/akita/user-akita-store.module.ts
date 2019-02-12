import { NgModule } from '@angular/core';
import { UserAkStore, UserAkQueries } from 'app/modules/user/store/akita';
import { UserQueries } from 'app/modules/user/core';

@NgModule({
  imports: [],
  providers: [
    UserAkStore,
    {
    provide: UserQueries,
    useClass: UserAkQueries
    }
  ]
})
export class UserAkitaStoreModule {}
