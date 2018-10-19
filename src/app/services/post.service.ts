import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/internal/operators/delay';
import { map } from 'rxjs/operators';


@Injectable()
export class PostService {

  url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }

  updatePost(id: string, changes: any): Observable<Post> {
    return this.http.put<Post>(`${this.url}/posts/${id}`, changes);
  }
  updatePostDelay(id: string, changes: any): Observable<Post> {
    return this.http.put<Post>(`${this.url}/posts/${id}`, changes)
      .pipe(
        delay(2000)
      );
  }
  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.url}/posts/${id}`);
  }
  findPost(type: string) {
    return map( (posts: Post[]) => posts.filter( (post, i) => type === 'be' ? i % 2 === 0 : i % 2 !== 0));
  }
}
