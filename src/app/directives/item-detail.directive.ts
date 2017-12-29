import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { Item } from '../interfaces/item';

@Directive({
  selector: '[appItemDetail]'
})
export class ItemDetailDirective {
  
  @Input('appItemDetail') itemField: string;
  item:Item;

  color:String = 'magenta';

  constructor(private el: ElementRef, private catalogService: CatalogService) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    const itemId = this.el.nativeElement.id;    
      this.catalogService
        .getItem(itemId)
        .subscribe(item => { this.item = item; this.alertDetail(this.item.description); });    
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

  private alertDetail(description) {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}