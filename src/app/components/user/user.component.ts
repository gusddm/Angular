import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User

  constructor() { 
    this.user = {
      name:'Gustavo',
      email:'gusddm@gmail.com',
      totalPurchases:0,
      amountSpent:0
    }
  }

  ngOnInit() {
    console.log(this.user.name);
  }

}