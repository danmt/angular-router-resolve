import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DemoResolver implements Resolve<any> {
  resolve() {
    return of(true).pipe(delay(2000));
  }
}