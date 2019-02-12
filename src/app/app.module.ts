import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ErrorModule } from 'app/modules/error/error.module';
import { AppRoutes } from 'app/app.routing';
import { AppComponent } from 'app/components/app/app.component';
import { SharedModule } from 'app/modules/shared/shared.module';
import { DataService } from 'app/modules/shared/http-services/data.service';
import { EnvServiceProvider } from 'app/modules/shared/environement-service/env.provider';
import { RxRootStoreModule } from 'app/store/rxjs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
    InMemoryWebApiModule.forRoot(DataService),
    ErrorModule,
    SharedModule.forRoot(),
    // AppNgrxStoreModule.forRoot()
    // AppNgxsStoreModule.forRoot()
    // AppAkitaStoreModule.forRoot()
    RxRootStoreModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    EnvServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
