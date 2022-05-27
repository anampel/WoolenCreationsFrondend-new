import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// Home
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './header/pages/pages.component';
import { AboutUsComponent } from './header/pages/about-us/about-us.component';
import { ContactComponent } from './header/pages/contact/contact.component';
import { FaqComponent } from './header/pages/faq/faq.component';
import { BlogComponent } from './header/pages/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Products feature
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { OfferComponent } from './products/offer/offer.component';
import { CreateYourOwnComponent } from './products/create-your-own/create-your-own.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
// Shopping feature
import { CartComponent } from './shopping/cart/cart.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { OrderComponent } from './shopping/order/order.component';
// User feature
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ForgotPassComponent } from './user/authentication/forgot-pass/forgot-pass.component';
// TODO login and signup components
// services
import { UserService } from './user/user.service';
import { UserDetailsService } from './user/user-details/user-details.service';
import { AppService } from './app.service';
import { ProductListService } from './products/product-list/product-list.service';
import { CartService } from './shopping/cart/cart.service';


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
    // LoginComponent,
    UserDetailsComponent,
    WishlistComponent,
    // SignupComponent,
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
    UserService,
    UserDetailsService,
    ProductListService,
    AppService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

