import { NgModule } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';


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
  }
]

@NgModule({
  imports: [RouterModule,
    RouterModule.forRoot(appRoutes),
    RouterLink,
    RouterLinkActive,
    RouterLinkWithHref,
    RouterOutlet
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
