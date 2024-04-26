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

  calcularTotalVehiculosPorMarca(): { [marca: string]: number } {
    const totalVehiculosPorMarca: { [marca: string]: number } = {};

    // Iterar sobre la lista de vehículos y calcular el total por marca
    this.vehiculos.forEach(vehiculo => {
      if (totalVehiculosPorMarca[vehiculo.marca]) {
        totalVehiculosPorMarca[vehiculo.marca]++;
      } else {
        totalVehiculosPorMarca[vehiculo.marca] = 1;
      }
    });

    return totalVehiculosPorMarca;
  }

  ngOnInit(): void {
    this.getVehiculoList()
  }

}

