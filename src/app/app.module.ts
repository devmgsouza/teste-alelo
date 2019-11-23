import { AppConfiguration } from './app.configuration';
import { ListsModule } from './components/lists/lists.module';
import { ItemsModule } from './components/items/items.module';
import { CategoriesModule } from './components/categories/categories.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from './core/storage.service';
import { LoaderInterceptor } from './core/loader-interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './components/home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoriesModule,
    ItemsModule,
    ListsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    AppConfiguration,
    {
      provide: APP_INITIALIZER,
      useFactory: (
        config: AppConfiguration) => () => config.loadEnv(),
      deps: [AppConfiguration], multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
