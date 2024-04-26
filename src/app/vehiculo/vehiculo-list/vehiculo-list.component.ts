import {Component, OnInit} from '@angular/core';
import {VehiculoService} from "../vehiculo.service";
import {Vehiculo} from "../vehiculo";

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrl: './vehiculo-list.component.css'
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculoService) {
  }

  getVehiculoList() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    })
  }

  ngOnInit(): void {
    this.getVehiculoList()
  }

}
