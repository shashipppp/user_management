import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth-guard';


const routes: Routes = [
  {path:'users',component:FirstCompComponent},
  {path:'edit_user',component:PostDetailComponent,canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'*', component:LoginComponent}
]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstCompComponent,PostDetailComponent,LoginComponent,SignupComponent]
