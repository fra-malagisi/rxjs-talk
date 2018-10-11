import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Developer } from '../models/developers.model';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/internal/operators/map';
import { DeveloperService } from '../services/developer.service';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  template: `
  <div style="margin-top:20px">
    <button type="button" class="btn btn-primary" (click)="toggle('be')">Back-End</button>
    <button type="button" class="btn btn-primary" style="margin-left:13px" (click)="toggle('fe')">Front-End</button>
  </div>
  <app-posts-list *ngIf="showBe" [posts]="postBackEnd$ | async"></app-posts-list>
  <app-posts-list *ngIf="showFe" [posts]="postFrontEnd$ | async"></app-posts-list>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  showBe = true;
  showFe = false;
  postFrontEnd$: Observable<Post[]>;
  postBackEnd$: Observable<Post[]>;
  findPost = (type: string) => map( (posts: Post[]) => posts.filter( (post, i) => type === 'be' ? i % 2 === 0 : i % 2 !== 0));

  constructor(private postService: PostService) { }

  ngOnInit() {

    const http$ = this.postService.getPosts();

    const posts$ = http$.pipe(
      tap(console.log),
      map(res => res),
      // shareReplay()
      );

    this.postBackEnd$ = posts$
      .pipe(
        this.findPost('be')
      );

    this.postFrontEnd$ = posts$
      .pipe(
        this.findPost('fe')
      );
  }

  toggle(type: string) {
    this.showBe = type === 'be';
    this.showFe = type === 'fe';
  }

}
