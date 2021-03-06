import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable()
export class UserService {

  private USER_URL:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: Http) {
  }

  getUsers() : Observable<User[]> {

    return this._http.get(this.USER_URL)
      .map(this.extractData)
      .catch(this.handleError);
}

private extractData(res: Response){
 let body = res.json();
 return body.data || {};
}

private handleError(error :Response | any){
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {

    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

  } else {

    errMsg = error.message ? error.message : error.toString();

  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}


}

