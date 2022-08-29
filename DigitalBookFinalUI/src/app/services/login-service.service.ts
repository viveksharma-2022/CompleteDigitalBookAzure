import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../models/loginmodel';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  //baseUrl='https://localhost:7103/api/Authentication';
  baseUrl='https://authenticationwebapiapp.azurewebsites.net/api/Authentication'

  constructor(private http:HttpClient) { }
  token="";
  Validate(cred:LoginCredentials):Observable<LoginCredentials[]>{
  return this.http.post<LoginCredentials[]>(this.baseUrl,cred)
  }
}
