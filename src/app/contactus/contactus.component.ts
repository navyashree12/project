import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name:any;
  email:any;
  message:any;
  log(a:NgForm){
    this.name=a.value.Name;
    this.email=a.value.email;
    this.message=a.value.message;
    alert("info sent");
  }
}
