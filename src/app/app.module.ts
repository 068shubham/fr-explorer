import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { AddressBarComponent } from './address-bar/address-bar.component';
import { AppService } from './app.service';
import { FolderDetailsComponent } from './folder-details/folder-details.component';
import { IconComponent } from './icon/icon.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    AddressBarComponent,
    FolderDetailsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
