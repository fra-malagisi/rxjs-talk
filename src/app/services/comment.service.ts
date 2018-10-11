import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Comment } from '../models/comment.model';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable()
export class CommentService {
  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments?postId=${postId}`);
  }
}
