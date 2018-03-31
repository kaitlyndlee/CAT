import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JsonReaderService {

  constructor(private httpClient: HttpClient) { }

  public fetch(url: string): Observable<any> {
    console.log("Fetching JSON data from " + url);
    return this.httpClient.get(url);
  }

}
