import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('formular') formular : NgForm;
  accounts = ['free','vip','pro'];
  text : string;
  genders = ['male' , 'female']

  ngOnInit() {
    
  }

  senden(){
    console.log(this.formular.value)
  }
}
