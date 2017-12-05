import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop-cart/shop-cart.component';
import { UserComponent } from './components/user/user.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CatalogService } from './services/catalog.service';
import { SpyDirective } from './components/shop-cart/spy.directive';
import { ItemDetailDirective } from './directives/item-detail.directive';

const appRoutes: Routes = [  
  { path: '', component: ShopListComponent },
  { path: 'item/:id', component: ItemDetailsComponent },
  {
    path: 'items',
    component: ItemDetailsComponent,
    data: { title: 'Items List' }
  }, 
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    UserComponent,
    ItemDetailsComponent,
    PageNotFoundComponent,
    SpyDirective,
    ItemDetailDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( 
      appRoutes
    ),
    HttpModule
  ], 
  exports: [
    
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
