import {Component, Input, OnInit} from '@angular/core';
import {Vehiculo} from "../vehiculo";

@Component({
  selector: 'app-vehiculo-detail',
  templateUrl: './vehiculo-detail.component.html',
  styleUrl: './vehiculo-detail.component.css'
})
export class VehiculoDetailComponent implements OnInit {

  @Input() vehiculoDetail!: Vehiculo;

  constructor() { }

  ngOnInit() {
  }

}
