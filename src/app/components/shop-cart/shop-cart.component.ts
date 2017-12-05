import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserComponent } from '../user/user.component';
import { ActivatedRoute } from '@angular/router/';
import { CatalogService } from '../../services/catalog.service';
import { Item } from '../../interfaces/item';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopListComponent implements OnInit {

  @ViewChild(UserComponent) child;
  user : User;
  items : Item[];
    
  constructor(private catalogService: CatalogService, private route: ActivatedRoute) {
    this.catalogService = catalogService;
  }

  ngOnInit() {
    this.user = this.child.user;
    this.catalogService.getItems()
                       .subscribe((items:Array<Item>) => { this.items = items; });;
    }

  getItem(id) {    
    return this.items.find(item => item.id == id);
  }

  onCheckOutItem(id, quantity:number) {
    var item = this.getItem(id);
    if(quantity >= 1 && quantity <= item.stock) {      
      item.checkedTotal = Number(item.checkedTotal) + Number(quantity);      
      item.stock -= +quantity;
    }
  }

  onRemoveFromCart(id) {
      var item = this.items.find(item => item.id == id)      
      item.stock = item.stock + item.checkedTotal;
      item.checkedTotal -= item.checkedTotal;
  }

  showCart() {
    return this.items.filter(item => item.checkedTotal > 0).length > 0;
  }
  
}