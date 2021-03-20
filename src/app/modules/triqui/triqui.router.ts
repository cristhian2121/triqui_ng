import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TriquiComponent } from './component/triqui/triqui.component';

// Components

const routes: Routes = [
  { path: "", component: TriquiComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TriquiRoutingModule { }
