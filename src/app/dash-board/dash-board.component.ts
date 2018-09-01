import { Component, OnInit } from '@angular/core';
import { PCard, Car } from '../core-module/modals/constants';
import { AlertService } from '../core-module/services';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  pCards: PCard[] = [];
  cars: Car[];
  selectedCar: string = 'BMW';
  data: any;
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    for (let i = 0; i <= 3; i++) {
      this.pCards.push({
        title: "Title" + i.toString(),
        body: "This is test body of " + i.toString()
      })
      this.cars = [
        { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
        { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
        { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
        { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
        { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
        { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
        { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
        { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
        { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
      ];
    }
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    }
  }
  selectCar(car: Car) {
    this.alertService.info(car.brand, car.vin);
  }
}