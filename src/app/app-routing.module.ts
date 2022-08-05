import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { PetsPageComponentComponent } from './pages/store/pets-page-component/pets-page-component.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: FramePageComponent,
    children: [
      { path: '', component: ProductsPageComponent},
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: 'pets', component: PetsPageComponentComponent},
    ]
  },
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'reset-password', component: ResetPasswordPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
