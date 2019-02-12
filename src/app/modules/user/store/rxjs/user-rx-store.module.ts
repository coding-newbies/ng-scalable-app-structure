import { NgModule } from '@angular/core';
import { UserRxQueries } from 'app/modules/user/store/rxjs/user.rx-queries';
import { UserRxStore } from 'app/modules/user/store/rxjs/user.rx-store';
import { UserQueries } from 'app/modules/user/core';

@NgModule({
  imports: [],
  providers: [
    UserRxStore,
    {
      provide: UserQueries,
      useClass: UserRxQueries
    }
  ]
})
export class UserRxStoreModule {}
