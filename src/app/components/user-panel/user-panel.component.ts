import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  user: Users;
  fullName: string = null;
  age: number;
  job: string;
  constructor(private uService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    setTimeout(() => {
      this.uService
        .getUserById(Number(localStorage.getItem('userId')))
        .subscribe((user) => {
          this.user = user;
          this.fullName = `${this.user.firstName} ${this.user.lastName}`;
          this.age = this.user.age;
          this.job = this.user.jobTitle;
        });
    }, 10);
  }
}
