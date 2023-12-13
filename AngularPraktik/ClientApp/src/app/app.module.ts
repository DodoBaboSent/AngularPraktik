import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MenuCafe } from './mycomponents/menuCafe/menuCafe.component'
import { ListCafe } from './mycomponents/listCafe/listCafe.component'
import { ModalCafe } from './mycomponents/modalCafe/modalCafe.component'
import { LoginForm } from './mycomponents/loginForm/loginForm.component';
import { RegForm } from './mycomponents/regForm/regForm.component';
import { DownloadDB } from './mycomponents/downloadDB/downloadDB.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MenuCafe,
    ListCafe,
    DownloadDB,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'login', component: LoginForm },
      { path: 'reg', component: RegForm },
      
    ]),
    ModalCafe,
    LoginForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
