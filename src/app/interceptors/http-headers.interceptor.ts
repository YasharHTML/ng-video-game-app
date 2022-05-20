import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'ffa5f33fbcmshcd24883f575e770p14f4d6jsnb86bb6189827',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
      },
      setParams {
        key: ''
      }
    })
  }
}
