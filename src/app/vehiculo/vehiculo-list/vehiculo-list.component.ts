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

  selectedVehiculo!: Vehiculo;
  selected: Boolean = false;

  constructor(private vehiculoService: VehiculoService) {
  }

  onSelected(vehiculo: Vehiculo) {
    this.selected = true;
    this.selectedVehiculo = vehiculo;
  }

  getVehiculoList() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    })
  }

  calcularTotalVehiculosPorMarca(): { [marca: string]: number } {
    const totalVehiculosPorMarca: { [marca: string]: number } = {};

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

