import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { TriquiRoutingModule } from './triqui.router';

// COMPONENTS
import { TriquiComponent } from './component/triqui/triqui.component';

// DIRECTIVE
import { SelectedBoxDirective } from './directives/selected-box.directive';



@NgModule({
  declarations: [
    TriquiComponent,
    SelectedBoxDirective
  ],
  imports: [
    CommonModule,
    TriquiRoutingModule
  ]
})
export class TriquiModule { }
