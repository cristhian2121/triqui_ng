import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { TriquiRoutingModule } from './triqui.router';

// COMPONENTS
import { TriquiComponent } from './component/triqui/triqui.component';



@NgModule({
  declarations: [
    TriquiComponent
  ],
  imports: [
    CommonModule,
    TriquiRoutingModule
  ]
})
export class TriquiModule { }
