import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserGuidePageRoutingModule } from './user-guide-routing.module';

import { UserGuidePage } from './user-guide.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserGuidePageRoutingModule,
    ComponentsModule
  ],
  declarations: [UserGuidePage]
})
export class UserGuidePageModule {}
