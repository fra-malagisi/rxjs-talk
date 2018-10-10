import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Developer } from '../models/developers.model';
import { developers } from '../db/developers';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-home',
  template: `
  <div style="margin-top:20px">
    <button type="button" class="btn btn-primary" (click)="toggle('junior')">Juniors</button>
    <button type="button" class="btn btn-primary" style="margin-left:13px" (click)="toggle('senior')">Seniors</button>
  </div>
  <app-developers-list *ngIf="showJunior" [developers]="developersJunior$ | async"></app-developers-list>
  <app-developers-list *ngIf="showSenior" [developers]="developersSenior$ | async"></app-developers-list>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  showJunior = false;
  showSenior = false;
  developersJunior$: Observable<Developer[]>;
  developersSenior$: Observable<Developer[]>;
  findLevel = (type: string) => map( (devs: Developer[]) => devs.filter(dev => dev.level === type));

  constructor() { }

  ngOnInit() {

    const http$ = developers;

    const developers$ = http$.pipe(
      tap(console.log),
      map(res => res)
      );

    this.developersJunior$ = developers$
      .pipe(
        this.findLevel('Junior')
      );

    this.developersSenior$ = developers$
      .pipe(
        this.findLevel('Senior')
      );
  }

  toggle(type: string) {
    this.showJunior = type === 'junior';
    this.showSenior = type === 'senior';
  }

}
