import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {
  alert: number = 0;
  constructor() { }

  ngOnInit() {
  }
  
  cambiar(){
    this.alert = (this.alert+1) % 4;
  }
}
