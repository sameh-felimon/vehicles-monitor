import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehiclesStoreModule } from './store/store.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    
  // Modules
    VehiclesModule,

    // Core, Shared
    CoreModule,
    SharedModule,

    // App
    AppRoutingModule,

    //store
    VehiclesStoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
