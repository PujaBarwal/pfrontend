import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { PropertybindingComponent } from './component/propertybinding/propertybinding.component';
import { FormsModule } from '@angular/forms';
import { EventbindingComponent } from './component/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './component/twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
