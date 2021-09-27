import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  placeholder="Enter a password";

  userData={
    userName:"",
    password:""

  }
 
  login(){
    console.log(this.userData)
    if(this.userData.userName && this.userData.password){
        alert("Login sucessfull")
      this.router.navigateByUrl("home")
    }else{
      alert("Username and password incorrect")
    }
 
  }

}
