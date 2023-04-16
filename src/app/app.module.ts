import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwowaybindingComponent,
    TemplatereferenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
