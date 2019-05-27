import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { routingComponents } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class SharedModule { }
