import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Developer } from '../models/developers.model';
import { developers } from '../db/developers';
import { delay } from 'rxjs/operators';

export class DeveloperService {

  constructor() { }

  getDevelopers(): Observable<Developer[]> {
    return developers
    .pipe(
      delay(2000)
    );
  }
}
