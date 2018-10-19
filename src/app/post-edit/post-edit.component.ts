import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { Post } from '../models/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/internal/operators/filter';
import { PostService } from '../services/post.service';
import { concatMap } from 'rxjs/internal/operators/concatMap';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { fromEvent, of } from 'rxjs';
import { exhaustMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-post-edit',
  templateUrl: 'post-edit.component.html',
  styles: []
})
export class PostEditComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() post: Post;
  @Input() index: number;
  @Output() postUpdated: EventEmitter<Post> = new EventEmitter;

  @ViewChild('saveButton') saveButton: ElementRef;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService
    ) { }

  ngOnInit() {
    this.post = !this.post ? {} as Post : this.post;
    this.form = this.form = this.fb.group({
                body: [this.post.body, Validators.required]
    });
  }

  ngAfterViewInit() {
    fromEvent(this.saveButton.nativeElement, 'click')
      .pipe(
        exhaustMap( () => this.postService.updatePostDelay(this.post.id, this.post))
      )
      .subscribe();
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.post.currentValue ) {
      this.form = this.fb.group({
        body: [this.post.body, Validators.required]
      });
      this.form.valueChanges
        .pipe(
          filter( () => this.form.valid),
          concatMap(changes => this.postService.updatePost(this.post.id, changes))
        )
        .subscribe(post => this.postUpdated.emit(post));
    }
  }
}
