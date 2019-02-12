import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { UserNgxsSelectors } from './user.ngxs-selectors';
import { UserNgxsState } from 'app/modules/user/store/ngxs';
import { UserQueries } from 'app/modules/user/core';

@NgModule({
  imports: [
    NgxsModule.forFeature([UserNgxsState])
  ],
  providers: [{
    provide: UserQueries,
    useClass: UserNgxsSelectors
  }]
})
export class UserNgxsStoreModule {}
