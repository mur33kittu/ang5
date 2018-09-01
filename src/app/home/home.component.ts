import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { OperationService, AlertService } from '../core-module/services';
import { PCard, Car } from '../core-module/modals/constants';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private slides: String[] = [];
  pCards: PCard[] = [];
  constructor(private operations: OperationService, private alertService: AlertService) {

  }

  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      this.slides.push("Slide " + i.toString());
      this.pCards.push({
        title: "Title" + i.toString(),
        body: "This is test body of " + i.toString()
      });
    }
  }
}