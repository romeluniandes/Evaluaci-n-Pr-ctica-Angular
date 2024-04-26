import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehiculoListComponent} from "./vehiculo-list/vehiculo-list.component";



@NgModule({
  declarations: [
    VehiculoListComponent
  ],
  exports: [
    VehiculoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehiculoModule { }
