import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistarComponent } from './component/registar/registar.component';
import { LoginComponent } from './component/login/login.component'
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/not-found/page-not-found.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SearchComponent } from './component/search/search.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { FoodpageComponent } from './component/foodpage/foodpage.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FoodService } from './component/services/food/food.service';
// google authentication
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { FooterComponent } from './component/footer/footer.component';
import { RestaurentLoginComponent } from './component/restaurent-login/restaurent-login.component';
import { TagsComponent } from './component/tags/tags.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';
import { AuthGuard } from './component/auth.guard';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ColorPickerModule } from 'ngx-color-picker';



const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user-auth',
    component: UserAuthComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'search/:searchItem', component: HomeComponent
  },
  {
    path: 'tag/:tag', component: HomeComponent
  },
  {
    path: 'food/:id', component: FoodpageComponent
  },
  {
    path: 'cart-page', component: CartPageComponent
  },
  {
    path: 'restaurent-login', component: RestaurentLoginComponent
  },
  {
    path:'footer', component:FooterComponent
  },
  {
    path:'seller-home',component:SellerHomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'add-product',component:AddProductComponent
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
    SearchComponent,
    CartPageComponent,
    FoodpageComponent,
    
    FooterComponent,
    RestaurentLoginComponent,
    TagsComponent,
    SellerHomeComponent,
    AddProductComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    RouterOutlet,
    ImageCropperModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    SocialLoginModule,
    HttpClientModule,
    ColorPickerModule
  ],
  providers: [FoodService, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '202182846392-vnusihmnobooho1nqpfhr54tevndn76i.apps.googleusercontent.com'
          )
        }

      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
