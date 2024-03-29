import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set("ordering", ordering);
    if (search) {
      params = new HttpParams().set("ordering", ordering).set("search", search)
    }
    {
      params: params
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }

  async getGameDetails(id: string): Promise<Game> {
    var gameInfoRequest:any = await this.http.get(`${env.BASE_URL}/games/${id}`).toPromise();
    var gameTrailerRequest:any = await this.http.get(`${env.BASE_URL}/games/${id}/movies`).toPromise();
    var gameScreenshotsRequest:any = await this.http.get(`${env.BASE_URL}/games/${id}/screenshots`).toPromise();
    return {...gameInfoRequest, scrennshots: gameScreenshotsRequest.results, trailers: gameTrailerRequest.results};
  }
}
