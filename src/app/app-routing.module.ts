import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './modules/home/component/home/home.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'triqui',
    loadChildren: () => import('./modules/triqui/triqui.module').then(tm => tm.TriquiModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
