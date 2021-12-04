import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',

  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  id = Number(localStorage.getItem('userId'));
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  viewProfile() {
    this.router.navigate([
      'profile',
      { userId: Number(localStorage.getItem('userId')) },
    ]);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['']);
    localStorage.clear();
  }
}
