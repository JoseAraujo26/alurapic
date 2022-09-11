import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';

import { SignupService } from './signup/signup.service';

import { HomeRoutingModule } from './home.routing.module';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    HomeRoutingModule,
    RouterModule,
  ],
  providers: [
    SignupService
  ]
})
export class HomeModule { }
