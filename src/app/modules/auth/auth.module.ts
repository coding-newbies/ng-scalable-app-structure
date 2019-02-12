import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRouting } from 'app/modules/auth/auth.routing';
import { AuthAsyncService, AuthHttpService } from 'app/modules/auth/services';
import { AuthRxStoreModule } from 'app/modules/auth/store/rxjs';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRouting,
    // AuthNgrxStoreModule
    // AuthNgxsStoreModule
    // AuthAkitaStoreModule
    AuthRxStoreModule
  ],
  providers: [
    {
      provide: AuthAsyncService,
      useClass: AuthHttpService
    }
  ],
})
export class AuthModule { }
