import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { PCard } from '../../modals';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() pcard: PCard;  
  constructor() { }

  ngOnInit() {
    

  }
  generateRandomBackGroundColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
