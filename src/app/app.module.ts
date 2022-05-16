import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './user/authentication/login/login.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { WishlistComponent } from './products/wishlist/wishlist.component';
import { ForgotPassComponent } from './user/authentication/forgot-pass/forgot-pass.component';
import { SignupComponent} from './user/authentication/signup/signup.component';
import { OrderComponent } from './shopping/order/order.component';
import { PagesComponent } from './header/pages/pages.component';
import { AboutUsComponent } from './header/pages/about-us/about-us.component';
import { ContactComponent } from './header/pages/contact/contact.component';
import { FaqComponent } from './header/pages/faq/faq.component';
import { BlogComponent } from './header/pages/blog/blog.component';
import { OfferComponent } from './products/offer/offer.component';
import { CreateYourOwnComponent } from './products/create-your-own/create-your-own.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { InterceptorService } from './user/authentication/interceptor.service';
import { UserService } from './user/user.service';
import { ProductListService } from "./products/product-list/product-list.service";
import { AuthenticationService } from "./user/authentication/auth.service";
import { UserDetailsService } from "./user/user-details/user-details.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductItemComponent,
    CartComponent,
    CheckoutComponent,
    ProductsComponent,
    ProductListComponent,
    LoginComponent,
    UserDetailsComponent,
    WishlistComponent,
    SignupComponent,
    ForgotPassComponent,
    OrderComponent,
    PagesComponent,
    AboutUsComponent,
    ContactComponent,
    FaqComponent,
    BlogComponent,
    OfferComponent,
    CreateYourOwnComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
  ],
  providers: [
    UserService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    ProductListService,
    UserDetailsService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

