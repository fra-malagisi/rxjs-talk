import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" routerLink="">RxJs</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
   data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item" routerLinkActive="active">
              <a class="nav-link" routerLink="">Home </a>
          </li>
          <li class="nav-item" routerLinkActive="active">
              <a class="nav-link" routerLink="/developers">Developers</a>
          </li>
          <li class="nav-item" routerLinkActive="active">
              <a class="nav-link" routerLink="/rxjs">Rxjs</a>
          </li>
          <li class="nav-item" routerLinkActive="active">
              <a class="nav-link" routerLink="/angular-interceptor">Angular Interceptors</a>
          </li>
      </ul>
  </div>
</nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
