import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import {AnimationsService} from "./animations.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ],
  exports: [
    AnimationsService
  ]
})
export class AnimationsModule { }
