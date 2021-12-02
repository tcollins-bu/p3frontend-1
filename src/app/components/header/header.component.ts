import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs';

declare const sidepanel: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }

  isFeedRoute() {
    return this.router.url === '/feed';
  }

  sidepanel(): void {
    function $(el) {
      return document.querySelector(el);
    }

    const outerWrapper = $('.side__panel-outer-wrapper');
    const hamburger = $('.hamburger-container');
    const sidepanel = $('.side__panel-wrapper');
    const closeBtn = $('.close-side-panel');
    const underlines = document.querySelectorAll('.underline');
    const links = document.querySelectorAll('.list__item__link');
    const logoutBTN = $('.logoutBTN');

    sidepanel.style.width = '60%';
    outerWrapper.style.width = '100%';

    closeBtn.addEventListener('click', () => {
      sidepanel.style.width = '0%';
      outerWrapper.style.width = '0%';
    });

    outerWrapper.addEventListener('click', (evt) => {
      if (evt.target === outerWrapper) {
        sidepanel.style.width = '0%';
        outerWrapper.style.width = '0%';
      }
    });

    logoutBTN.addEventListener('click', () => {
      sidepanel.style.width = '0%';
      outerWrapper.style.width = '0%';
    });
  }
}
