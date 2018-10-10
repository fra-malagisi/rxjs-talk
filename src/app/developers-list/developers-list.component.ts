import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../models/developers.model';

@Component({
  selector: 'app-developers-list',
  template: `
  <div class="row">
    <div class="col-4" *ngFor="let developer of developers; let i = index;">
      <div class="card" style="margin-top:20px;width:18rem" >
      <div class="card-header">
        {{developer.name}} {{developer.surname}}
      </div>
        <div class="card-body">
          <img class="card-img-top" [src]="developer.imgUrl" alt="Card image cap">
          <b>Languages: </b>{{developer.languages}}
          <br>
          <b>Level: </b>{{developer.level}}
        </div>
        <div class="card-footer">
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
          <button type="button" class="btn btn-primary" [routerLink]="['/courses', course.id]" style="margin-left: 10px">View course
          </button>-->
        </div>
        <!-- <app-edit-course [course]="course"></app-edit-course> -->
    </div>
  </div>
</div>
  `,
  styles: [
    `
  .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
  }
  `]
})
export class DevelopersListComponent implements OnInit {

  @Input() developers: Developer[];
  constructor() { }

  ngOnInit() {
  }

}
