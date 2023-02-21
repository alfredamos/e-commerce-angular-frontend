import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { EditProfileComponent } from './auth/edit-profile/edit-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { AdminRouteGuard } from './guards/admin-route.guard';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { DeleteCategoryComponent } from './categories/delete-category/delete-category.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { DeleteOrderComponent } from './orders/delete-order/delete-order.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { DeleteCustomerComponent } from './customers/delete-customer/delete-customer.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './auth/home/home.component';
import { NotAllowedPageComponent } from './auth/not-allowed-page/not-allowed-page.component';
import { MustLogginPageComponent } from './auth/must-loggin-page/must-loggin-page.component';
import { ReturnUrlRouteGuard } from './guards/return-url-route.guard';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },
  {
    path: 'add-order',
    component: CreateOrderComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'delete-order/:id',
    component: DeleteOrderComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },
  {
    path: 'detail-order/:id',
    component: OrderDetailComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'edit-order/:id',
    component: EditOrderComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },

  {
    path: 'categories',
    component: CategoryListComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'add-category',
    component: CreateCategoryComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },
  {
    path: 'delete-category/:id',
    component: DeleteCategoryComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },
  { path: 'detail-category/:id', component: CategoryDetailComponent },
  {
    path: 'edit-category/:id',
    component: EditCategoryComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },

  {
    path: 'customers',
    component: CustomerListComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },
  {
    path: 'detail-customer/:id',
    component: CustomerDetailComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'delete-customer/:id',
    component: DeleteCustomerComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },

  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [LoggedInGuard],
  },
  { path: 'add-product', component: CreateProductComponent },
  {
    path: 'delete-product/:id',
    component: DeleteProductComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },
  {
    path: 'detail-product/:id',
    component: ProductDetailComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    canActivate: [LoggedInGuard, AdminRouteGuard],
  },

  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [LoggedInGuard],
  },
  //, canActivate: [ReturnUrlRouteGuard]
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'logout', component: LogoutComponent, canActivate: [LoggedInGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'not-allowed', component: NotAllowedPageComponent },
  { path: 'must-login', component: MustLogginPageComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.canceledNavigationResolution = 'computed';
  }
}
