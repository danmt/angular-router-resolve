import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlueComponent } from './blue.component';
import { GreenComponent } from './green.component';
import { RedComponent } from './red.component';
import { DemoResolver } from './demo.resolver';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MatButtonModule, MatProgressSpinnerModule ],
  declarations: [ AppComponent, BlueComponent, GreenComponent, RedComponent ],
  providers: [DemoResolver],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
