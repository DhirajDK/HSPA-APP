import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [

    {
      "Id": 1,
      "Name": "Dhira",
      "Type": "House",
      "Price": 11000
    },
    {
      "Id": 2,
      "Name": "Angad",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 3,
      "Name": "Sujay",
      "Type": "House",
      "Price": 13000
    },
    {
      "Id": 4,
      "Name": "Amar",
      "Type": "House",
      "Price": 14000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
