import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductItemComponent } from './products/product-item/product-item.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './user/authentication/login/login.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { WishlistComponent } from './products/wishlist/wishlist.component';
import { SignupComponent } from './user/authentication/signup/signup.component';
import { ForgotPassComponent } from './user/authentication/forgot-pass/forgot-pass.component';
import { OrderComponent } from './shopping/order/order.component';
import {FaqComponent} from './header/pages/faq/faq.component';
import {ContactComponent} from './header/pages/contact/contact.component';
import {BlogComponent} from './header/pages/blog/blog.component';
import {AboutUsComponent} from './header/pages/about-us/about-us.component';
import {OfferComponent} from './products/offer/offer.component';
import {CreateYourOwnComponent} from './products/create-your-own/create-your-own.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-item', component: ProductItemComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotPass', component: ForgotPassComponent },
  { path: 'order', component: OrderComponent },
  { path: 'pages/faq', component: FaqComponent },
  { path: 'pages/contact', component: ContactComponent },
  { path: 'pages/blog', component: BlogComponent },
  { path: 'pages/aboutUs', component: AboutUsComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'createYourOwn', component: CreateYourOwnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
