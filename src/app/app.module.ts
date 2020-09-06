import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './../../../beautiful-card/src/app/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ThefirstComponent } from './thefirst/thefirst.component';
import { ThesecondComponent } from './thesecond/thesecond.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ThefirstComponent, ThesecondComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
