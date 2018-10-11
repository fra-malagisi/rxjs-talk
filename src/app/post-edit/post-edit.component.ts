import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  template: `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{post.title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form [formGroup]="form">
        <div class="col-12 text-left">
          <label><b>Post content</b></label>
        </div>
        <div class="col-12">
          <textarea style="width:100%" rows="6" formControlName="body"></textarea>
        </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" #saveButton>Save</button>
      </div>
    </div>
  </div>
</div>
`,
  styles: []
})
export class PostEditComponent implements OnInit, AfterViewInit {

  @Input() post: Post;
  @Output() postUpdated: EventEmitter<Post> = new EventEmitter;

  @ViewChild('saveButton') saveButton: ElementRef;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService
    ) { }

  ngOnInit() {
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

  ngAfterViewInit() {
    fromEvent(this.saveButton.nativeElement, 'click')
      .pipe(
        exhaustMap( () => this.postService.updatePostDelay(this.post.id, this.post))
      )
      .subscribe();
  }

}
