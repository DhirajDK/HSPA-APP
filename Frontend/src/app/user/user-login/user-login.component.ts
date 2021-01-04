import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/sevices/alertify.service';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private auth: AuthService,
              private alertify: AlertifyService,
              private route: Router) { }

  ngOnInit() {
  }
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.auth.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName);
      this.alertify.success("Login successfull");
      this.route.navigate(['/']);
    }else{
      this.alertify.error("UserId or Password is wrong");
    }
  }
}
