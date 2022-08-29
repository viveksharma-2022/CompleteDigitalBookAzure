import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupCredentials } from '../models/signupModel';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})
export class SignupCompComponent implements OnInit {
errmsg='';
  title='userSignUp';
  users:SignupCredentials[]=[];
  usersignup:SignupCredentials={
    UserId:0,
    UserName:'',
    UserEmail:'',
    Password:'',
    UserType:''

  }
  constructor(private RegistrationService:RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.usersignup.UserName!='' && this.usersignup.UserEmail!='' && this.usersignup.Password!='' && this.usersignup.UserType!='')
    {
      this.RegistrationService.CreateAccount(this.usersignup)
      .subscribe(
        response=>{
          console.log(response);
        }
      )
      this.router.navigate(['/login']);
    }
    else{
      alert('Please enter your details!')
      this.errmsg='Please provide all details'
    }

  }

}
