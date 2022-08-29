import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials } from '../models/loginmodel';
import { LoginServiceService } from '../services/login-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  cred:LoginCredentials={
    UserName:"",
    Password:""
  }
  usernamediv:boolean=false;
  passdiv:boolean=false;
  isAuthenticated:boolean=false;
  currentUserName:string='';
  currentUserId:string='';
  currentUserType:string='';
  signinnavlink:boolean=true;

  token : any={
    token:'',
    isAuthenticated:false,
    UserType:''
  }


  constructor(private loginservice:LoginServiceService, private router:Router) { }

  jwthelper = new JwtHelperService();

  ngOnInit(): void {
  }
  resp: any;

  onSubmit(){

    if(this.cred.UserName!='' && this.cred.Password!='')
    {
      this.loginservice.Validate(this.cred)
      .subscribe(
        response=>
        {

          this.token=response;
          const decodedToken=this.jwthelper.decodeToken(this.token.token);
          // console.log("this is decoded token"+decodedToken);
          this.isAuthenticated=this.token.isAuthenticated;
          this.currentUserName=decodedToken.UserName;
          this.currentUserType=decodedToken.Usertype;
          localStorage.setItem("token",this.token.token);
          localStorage.setItem("signinnavlink",this.isAuthenticated?"true":"false");
          localStorage.setItem("currentUserName",this.currentUserName);
          localStorage.setItem("currentUserType",this.currentUserType);
          localStorage.setItem("isAutheticated",this.isAuthenticated?"true":"false");
          if(this.token=='')
          {
            alert('EmailId or Password is incorect');
            return;
          }

          if(this.currentUserType==="Author")
          {
            this.router.navigate(['/authorHome']);
          }
          else{
            this.router.navigate(['']);
          }

        },
        error=>{
          console.log("error");
        }
      )
    }
    if(this.cred.UserName=='' && this.cred.Password!='')
    {
      this.usernamediv=true;
      this.passdiv=false;

    }
    if(this.cred.Password=='' && this.cred.UserName!=''){
      this.passdiv=true;
      this.usernamediv=false;
    }
    if(this.cred.Password=='' && this.cred.UserName==''){
      this.passdiv=true;
      this.usernamediv=true;
    }
  }
}
