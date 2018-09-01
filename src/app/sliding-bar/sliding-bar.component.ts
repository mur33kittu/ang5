import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-sliding-bar',
  templateUrl: './sliding-bar.component.html',
  styleUrls: ['./sliding-bar.component.css']
})
export class SlidingBarComponent implements OnInit {
  private calendarValue: Date[];
  private rangeValues: number[] = [10, 30];
  cars: SelectItem[];
  constructor() { }

  ngOnInit() {
    this.cars = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
  }

}
