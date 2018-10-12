import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Comment } from '../models/comment.model';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable()
export class CommentService {
  url = 'https://jsonplaceholder.typicode.com';
  urlDelay = 'http://slowwly.robertomurray.co.uk/delay/2500/url/https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient) { }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments?postId=${postId}`)
      .pipe(
        tap(console.log)
      );
  }
  getCommentsByPostIdDelay(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.urlDelay}/comments`);
  }
}
