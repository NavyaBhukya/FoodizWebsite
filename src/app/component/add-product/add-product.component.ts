import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

addProductMessage:string|undefined
constructor(private foodService:FoodService , private route:Router){}
ngOnInit(): void {
  
}
submit(data:product){
 this.foodService.addProduct(data).subscribe((result)=>{
  console.warn(result);
  if(result){
    this.addProductMessage = 'product added succesfully'
  }
  setTimeout(()=>(this.addProductMessage = undefined),3000)
 })
}
addproduct(){
  this.route.navigate(['/seller-home'])
}

}
