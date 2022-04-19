import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { DownloadsPageRoutingModule } from './downloads-routing.module';

import { DownloadsPage } from './downloads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    DownloadsPageRoutingModule,
    CommonModule
  ],
  declarations: [DownloadsPage]
})
export class DownloadsPageModule {}
