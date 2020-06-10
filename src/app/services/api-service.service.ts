import { AllreadyExistError } from '../../assets/AllreadyExistError';
import { NotFoundError } from '../../assets/NotFoundError';
import { AppError } from '../../assets/appErrors';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { catchError, map, retry } from 'rxjs/operators';
import { throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(@Inject(String)private url: string, private http: HttpClient) {
  }

  getPosts(url?: string) {
    console.log('kommer hit ' + url);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    if (url) { this.url = url; }
    return this.http.get(this.url, httpOptions)
    .pipe(
      retry(1), // använd retry för att göra om reqesten x gånger
      catchError(this.HandleThisClassErrors)
    );
  }

  doPost(url: string, postobj) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(url, JSON.stringify(postobj), httpOptions)
    .pipe(
      catchError(this.HandleThisClassErrors)
    );
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
      catchError(this.HandleThisClassErrors)
    );
  }



  private HandleThisClassErrors(error: Response) {

    if (error.status === 400) {
      return throwError(new AllreadyExistError(error.json()));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }
}
