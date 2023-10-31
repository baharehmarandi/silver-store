import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from "../../pages/sign-in/sign-in.component";
import {SignUpComponent} from "../../pages/sign-up/sign-up.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {PrimengModule} from "../../shared/primeng/primeng.module";
import {StepsModule} from 'primeng/steps';
import {RegisterComponent} from './components/register/register.component';
import {NumberConfirmationComponent} from './components/number-confirmation/number-confirmation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    RegisterComponent,
    NumberConfirmationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    StepsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
