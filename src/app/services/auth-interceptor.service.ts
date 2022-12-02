import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {exhaustMap, take} from 'rxjs/operators';

import { TranslatorService } from './translator.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Api-Key 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`
      }
    });

    return next.handle(request);
  }
}

