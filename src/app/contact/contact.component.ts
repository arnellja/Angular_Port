import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public name: string = "";
  public email: string = "";
  public message: string = "";
  public subject: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(){
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
    console.log(this.subject);
    this.name = "";
    this.email = "";
    this.message = "";
    this.subject = "";
  }
}
