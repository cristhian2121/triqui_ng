import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { TriquiModule } from './modules/triqui/triqui.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TriquiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
