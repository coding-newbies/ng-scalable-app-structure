import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRouting } from 'app/modules/user/user.routing';
import { UsersComponent, UserDetailComponent, NewUserComponent } from 'app/modules/user/pages';
import { UserAsyncService, UserHttpService } from 'app/modules/user/services';
import { UserRxStoreModule } from 'app/modules/user/store/rxjs';

@NgModule({
  imports: [
    CommonModule,
    UserRouting,
    // UserNgrxStoreModule
    // UserNgxsStoreModule
    // UserAkitaStoreModule
    UserRxStoreModule
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    NewUserComponent
  ],
  providers: [
    {
      provide: UserAsyncService,
      useClass: UserHttpService
    }
  ],
})
export class UserModule { }
