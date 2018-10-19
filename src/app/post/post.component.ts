import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/models/post.model';
import { PostService } from '../services/post.service';
import { CommentService } from '../services/comment.service';
import { fromEvent, concat } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { debounceTime, distinctUntilChanged, shareReplay, switchMap, tap } from 'rxjs/operators';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styles: []
})
export class PostComponent implements OnInit, AfterViewInit {

  postId: string;
  post$: Observable<Post>;
  comments$: Observable<Comment[]>;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private postservice: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {

    this.postId = this.route.snapshot.params['id'];

    this.post$ = this.postservice.getPost(this.postId);
  }
  ngAfterViewInit() {
    const initialComments$ = this.loadComments();
    const searchComments$ = fromEvent<any>( this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(search => this.loadComments(search.toUpperCase()))
      );
      this.comments$ = concat(initialComments$, searchComments$);
  }

  loadComments(search = ''): Observable<Comment[]> {
    const http$ = search === '' ?  this.commentService.getCommentsByPostId(this.postId) :
            this.commentService.getCommentsByPostIdDelay(this.postId);
    return http$
    .pipe(
      map( comments => comments.filter(el => el.email.toUpperCase().indexOf(search) !== -1))
    );
  }

}
