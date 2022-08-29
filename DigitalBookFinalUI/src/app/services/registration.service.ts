import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupCredentials } from '../models/signupModel';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  //baseUrl='https://localhost:7069/Author/CreateAccount';
  baseUrl='https://authorapivk.azurewebsites.net/Author/CreateAccount';

  constructor(private http:HttpClient) { }
  CreateAccount(usersignup:SignupCredentials):Observable<SignupCredentials[]>{
    return this.http.post<SignupCredentials[]>(this.baseUrl,usersignup);
  }
}
