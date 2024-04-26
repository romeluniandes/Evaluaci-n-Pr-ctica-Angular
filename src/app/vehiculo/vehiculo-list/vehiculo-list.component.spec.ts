import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from '../vehiculo.service';
import { of } from 'rxjs';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let vehiculoService: jasmine.SpyObj<VehiculoService>;

  beforeEach(async () => {
    const vehiculoServiceSpy = jasmine.createSpyObj('VehiculoService', ['getVehiculos']);
    await TestBed.configureTestingModule({
      declarations: [VehiculoListComponent],
      providers: [{ provide: VehiculoService, useValue: vehiculoServiceSpy }]
    }).compileComponents();
    vehiculoService = TestBed.inject(VehiculoService) as jasmine.SpyObj<VehiculoService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display vehicles in table', () => {
    const mockVehiculos: Vehiculo[] = [
      new Vehiculo(
        1,
        'Renault',
        'Kangoo',
        'VU Express',
        2017,
        93272,
        'Blanco',
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
      ),
      new Vehiculo(
        2,
        'Chevrolet',
        'Spark',
        'Life',
        2018,
        55926,
        'Plata',
        'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg'
      ),
      new Vehiculo(
        3,
        'Chevrolet',
        'Sail',
        'LT Sedan',
        2016,
        94321,
        'Rojo',
        'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png'
      )
    ];

    vehiculoService.getVehiculos.and.returnValue(of(mockVehiculos));

    fixture.detectChanges();

    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(mockVehiculos.length);

    tableRows.forEach((row:HTMLElement, index:number) => {
      const vehiculo = mockVehiculos[index];
      const cells = row.querySelectorAll('td');
      expect(cells[0].textContent).toContain(vehiculo.marca);
      expect(cells[1].textContent).toContain(vehiculo.linea);
      expect(cells[2].textContent).toContain(vehiculo.modelo);
    });
  });
});
