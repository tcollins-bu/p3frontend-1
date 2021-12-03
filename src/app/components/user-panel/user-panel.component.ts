import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  firstName: string = null; // localStorage.getItem('firstName');
  lastName: string = null; //localStorage.getItem('lastName');
  fullName: string = null; //`${this.firstName} ${this.lastName}`;
  constructor() {}

  ngOnInit(): void {
    this.getName();
  }

  getName() {
    setTimeout(() => {
      this.firstName = localStorage.getItem('firstName');
      this.lastName = localStorage.getItem('lastName');
      this.fullName = `${this.firstName} ${this.lastName}`;
    }, 100);
  }
}
