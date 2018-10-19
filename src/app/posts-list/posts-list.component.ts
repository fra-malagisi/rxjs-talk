import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Post } from '../models/post.model';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-posts-list',
  templateUrl: 'posts-list.component.html',
  styles: []
})
export class PostsListComponent implements OnInit {

  @Input() posts: Post[];
  postSelected: Post;
  constructor() { }
  ngOnInit() {
  }
  updateList(post: Post) {
    this.posts.map( el => el.id === post.id ? el.body = post.body : el = el);
  }
  trackByFn(index:any, item: any) {
    return index; // or item.id
  }

}
