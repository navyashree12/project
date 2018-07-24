import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allResolved } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  username:any;
password:any;
log(a:NgForm){
  this.username=a.value.uname;
  this.password=a.value.psw;
  alert(this.username);
}
  }

