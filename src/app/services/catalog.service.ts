import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Item } from '../interfaces/item';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class CatalogService implements OnDestroy {

  useUrl = './assets/catalog.json';
  private items:Observable<any> = null;

  constructor(private http: Http) {
  }

  getItems() {
    if(!this.items) {
      console.log("busco articulos");
      this.items = this.http.get(this.useUrl)
                            .map((res: Response) => res.json())
                            .publishReplay(1)
                            .refCount();        
    }
    return this.items;
  }
  
  getItem(id) {
    //console.log(this.getItems());
    return this.getItems()
               .map(items => items.find(item => item.id == id));
  }

  ngOnDestroy() {
    console.log("Destroy"+ "Catalog Service");
  }

}
