import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookAppUi';
  user=(localStorage.getItem('currentUserName'));
  currentUser=this.user;
  token=localStorage.getItem("token");
  Loggedinbutton:boolean=true;
  logoutbutton:boolean=true;

  constructor(private router:Router){
    this.currentUser=this.user;
  }
  ngOnInit():void {
    this.currentUser=this.user;

  }
  logOut(){
    if(localStorage.getItem("token"))
    {
     localStorage.clear();
      this.logoutbutton=false;
      this.Loggedinbutton=true;
    }
    this.router.navigate(['/login']);
  }


}

