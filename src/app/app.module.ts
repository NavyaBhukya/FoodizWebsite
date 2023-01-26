import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistarComponent } from './component/registar/registar.component';
// import { LoginComponent } from './component/login/login.component';
import { LoginComponent } from './component/login/login.component'
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { Router, RouterLink, RouterLinkActive, RouterModule,RouterOutlet,Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SearchComponent } from './component/search/search.component';
import { Validators } from '@angular/forms';

  const appRoutes: Routes =[
  {
    path:'',
    component:LoginComponent},
    {
    path:'user-auth',
    component:UserAuthComponent
  },
  {
     path:'login',
     component:LoginComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'search/:searchItem',component:HomeComponent
  },
  {
    path:'tag/:tag',component:HomeComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    RegistarComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserAuthComponent,
    HeaderComponent,
    ContactUsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
