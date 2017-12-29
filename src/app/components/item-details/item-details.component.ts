import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { CatalogService } from '../../services/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']  
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  constructor(private catalogService: CatalogService, private route: ActivatedRoute) {  }

  private itemDetail: Item;

  ngOnInit() {
    this.catalogService.getItem(this.route.snapshot.params.id)
                       .subscribe(item => { this.itemDetail = item; } );
  }

  ngOnDestroy(): void {
    //this.itemDetail$.unsubscribe();
  }
}
