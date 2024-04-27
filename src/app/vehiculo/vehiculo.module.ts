import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehiculoListComponent} from "./vehiculo-list/vehiculo-list.component";
import { VehiculoDetailComponent } from './vehiculo-detail/vehiculo-detail.component';



@NgModule({
  declarations: [
    VehiculoListComponent,
    VehiculoDetailComponent
  ],
  exports: [
    VehiculoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehiculoModule { }
