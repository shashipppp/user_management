import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  
  
  handleError(err:HttpErrorResponse){
    return throwError('err: ' + err);
}

getUsers():Observable<any>{

return this.http.get('http://localhost:3000/api/users').pipe(catchError(this.handleError));
}

userEdit(data):Observable<any>{
 return
}


}
