import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {

  genders = ['MALE','FEMALE'];

  constructor() { }

  ngOnInit(): void {
  }

  submitted = false;
  sel = null;
  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
  }

  onSubmit(form: NgForm){
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.secret = form.value.secque;
    this.user.gender = form.value.gender;
    this.submitted = true;
    form.reset();
  }
}
