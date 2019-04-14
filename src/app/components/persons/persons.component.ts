import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { IPersonsState, IPersonsData } from './../../model/persons.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  
  constructor() { }

  _persons: IPersonsData[];

  @Input('persons')
  set persons(value: IPersonsData[]) {
    this._persons = JSON.parse(JSON.stringify(value));  // we create a new object so when we change it, there wont state mutation
  }

  @Output() rowUpdated: EventEmitter<any> = new EventEmitter<any>();

  states = [];

  ngOnInit() {
  
    this.states = [{
      "ID": 1,
      "Name": "Alabama"
  }, {
      "ID": 2,
      "Name": "Alaska"
  }, {
      "ID": 3,
      "Name": "Arizona"
  }, {
      "ID": 4,
      "Name": "Arkansas"
  }, {
      "ID": 5,
      "Name": "California"
  }, {
      "ID": 6,
      "Name": "Colorado"
  }, {
      "ID": 7,
      "Name": "Connectictu"
  }, {
      "ID": 8,
      "Name": "Delaware"
  }, {
      "ID": 9,
      "Name": "District of Columbia"
  }, {
      "ID": 10,
      "Name": "Florida"
  }, {
      "ID": 11,
      "Name": "Georgia"
  }, {
      "ID": 12,
      "Name": "Hawaii"
  }, {
      "ID": 13,
      "Name": "Idaho"
  }, {
      "ID": 14,
      "Name": "Illinois"
  }, {
      "ID": 15,
      "Name": "Indiana"
  }, {
      "ID": 16,
      "Name": "Iowa"
  }, {
      "ID": 17,
      "Name": "Kansas"
  }, {
      "ID": 18,
      "Name": "Kentucky"
  }, {
      "ID": 19,
      "Name": "Louisiana"
  }, {
      "ID": 20,
      "Name": "Maine"
  }, {
      "ID": 21,
      "Name": "Maryland"
  }, {
      "ID": 22,
      "Name": "Massachusetts"
  }, {
      "ID": 23,
      "Name": "Michigan"
  }, {
      "ID": 24,
      "Name": "Minnesota"
  }, {
      "ID": 25,
      "Name": "Mississippi"
  }, {
      "ID": 26,
      "Name": "Missouri"
  }, {
      "ID": 27,
      "Name": "Montana"
  }, {
      "ID": 28,
      "Name": "Nebraska"
  }, {
      "ID": 29,
      "Name": "Nevada"
  }, {
      "ID": 30,
      "Name": "New Hampshire"
  }, {
      "ID": 31,
      "Name": "New Jersey"
  }, {
      "ID": 32,
      "Name": "New Mexico"
  }, {
      "ID": 33,
      "Name": "New York"
  }, {
      "ID": 34,
      "Name": "North Carolina"
  }, {
      "ID": 35,
      "Name": "Ohio"
  }, {
      "ID": 36,
      "Name": "Oklahoma"
  }, {
      "ID": 37,
      "Name": "Oregon"
  }, {
      "ID": 38,
      "Name": "Pennsylvania"
  }, {
      "ID": 39,
      "Name": "Rhode Island"
  }, {
      "ID": 40,
      "Name": "South Carolina"
  }, {
      "ID": 41,
      "Name": "South Dakota"
  }, {
      "ID": 42,
      "Name": "Tennessee"
  }, {
      "ID": 43,
      "Name": "Texas"
  }, {
      "ID": 44,
      "Name": "Utah"
  }, {
      "ID": 45,
      "Name": "Vermont"
  }, {
      "ID": 46,
      "Name": "Virginia"
  }, {
      "ID": 47,
      "Name": "Washington"
  }, {
      "ID": 48,
      "Name": "West Virginia"
  }, {
      "ID": 49,
      "Name": "Wisconsin"
  }, {
      "ID": 50,
      "Name": "Wyoming"
  }, {
      "ID": 51,
      "Name": "North Dakota"
  }];
  }

  onRowUpdating(e) {
    this.rowUpdated.emit(Object.assign(e.oldData, ...e.newData));
  }

}