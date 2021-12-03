import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',

  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  viewProfile() {
    console.log('Navigate to profile page');

    //this.router.navigate['userProfile'];
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['']);
    localStorage.clear();
  }
}
