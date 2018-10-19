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
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  showBe = true;
  showFe = false;
  postFrontEnd$: Observable<Post[]>;
  postBackEnd$: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {

    const http$ = this.postService.getPosts();

    const posts$ = http$.pipe(
      tap(console.log),
      // shareReplay()
      );

    this.postBackEnd$ = posts$
      .pipe(
        this.postService.findPost('be')
      );

    this.postFrontEnd$ = posts$
      .pipe(
        this.postService.findPost('fe')
      );
  }

  toggle(type: string) {
    this.showBe = type === 'be';
    this.showFe = type === 'fe';
  }

}
