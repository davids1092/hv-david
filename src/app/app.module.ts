import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LottieModule } from 'ngx-lottie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RatingModule} from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppPrimeModule } from './prime-ng/primeModule';
export function playerFactory() { // add this line
  return import('lottie-web'); // add this line
  
} //
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    AppPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
