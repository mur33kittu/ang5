import { Component, OnInit } from '@angular/core';
import { TableModel } from '../core-module/modals';

@Component({
  selector: 'info-module',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  private loadTable: TableModel;
  constructor() { }

  ngOnInit() {

    this.loadTable = {
      tableColumns: [{ field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }],
      tableData: [
        { "brand": "Volkswagen", "year": 2012, "color": "White", "vin": "dsad231ff" },
        { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
        { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
        { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
        { "brand": "Mercedes", "year": 1995, "color": "White", "vin": "hrtwy34" },
        { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
        { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
        { "brand": "Jaguar", "year": 2013, "color": "White", "vin": "greg34" },
        { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
        { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
      ],
      title: "From Info Component"
    }
  }

}