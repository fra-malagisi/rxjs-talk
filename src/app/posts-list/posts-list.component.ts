import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts-list',
  template: `
  <div class="row">
    <div class="col-4" *ngFor="let post of posts; let i = index;">
      <div class="card" style="margin-top:20px;width:18rem" >
      <div class="card-header">
        <b>{{post.title}}</b>
      </div>
        <div class="card-body">
          {{post.body}}
        </div>
        <div class="card-footer">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
         <button type="button" class="btn btn-success" [routerLink]="['/posts', post.id]" style="margin-left: 10px">View comments</button>
        </div>
        <app-post-edit (postUpdated)="updateList($event)" [post]="post"></app-post-edit>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class PostsListComponent implements OnInit {

  @Input() posts: Post[];

  constructor() { }

  ngOnInit() {
  }
  updateList(post: Post) {
    console.log(post);
    this.posts.map( el => el.id === post.id ? el.body = post.body : el = el);
  }

}
