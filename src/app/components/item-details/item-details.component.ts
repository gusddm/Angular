import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { CatalogService } from '../../services/catalog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  providers: [ CatalogService ]
})
export class ItemDetailsComponent implements OnInit {

  constructor(private catalogService: CatalogService, private route: ActivatedRoute) {
    this.catalogService = catalogService;
  }

  private itemDetail: Item;

  ngOnInit() {
    this.catalogService.getItem(this.route.snapshot.params.id)
                       .subscribe(item => { this.itemDetail = item; console.log(this.itemDetail);} );
  }

}
