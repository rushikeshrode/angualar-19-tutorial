import { Component } from '@angular/core';
import { MobilesService } from '../services/mobiles.service';
import { NgFor, SlicePipe } from '@angular/common';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-services-output',
  imports: [NgFor, SlicePipe],
  templateUrl: './services-output.component.html',
  styleUrl: './services-output.component.css'
})
export class ServicesOutputComponent {

  receivedProducts:any=[];
  products:any[] = [];

  constructor(private mobilesService:MobilesService, private productsService:ProductsService){  }

  // ngOnInit() {this.receivedProducts = this.mobilesService.mobiles }

  getMobiles(){
    console.log(this.mobilesService.mobiles)
    this.receivedProducts = this.mobilesService.mobiles;
  }

  // for product services having online api
  // ngOnInit(){
  //   this.productsService.getProductsList().subscribe((data:any)=>{
  //     this.products = data.products;
  //     console.log(this.products)
  //   })
  // }

  getProducts(){
    this.productsService.getProductsList().subscribe((data:any)=>{
          this.products = data.products;
          console.log(this.products)
        })
  }
}
