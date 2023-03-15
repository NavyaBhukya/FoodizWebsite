import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productList:undefined | product[]
  productMessage:undefined | string
constructor(private foodService:FoodService){}
ngOnInit(): void {
  this.list();
  // this.foodService.productList().subscribe((result)=>{
  //   console.warn(result)
  //   if(result){
  //     this.productList = result;
  //   }
  //    this.productList = result;
  // })
}
deleteProduct(id:number){
  console.warn("test id",id)
  this.foodService.deleteProduct(id).subscribe((result)=>{
   if(result){
    this.productMessage = "product is deleted"
    alert("product has been deleted")
    this.list();
   }
  })
  setTimeout(()=>{
    this.productMessage=undefined
  },3000)
}
list(){
  this.foodService.productList().subscribe((result)=>{
    console.warn(result);
    if(result){
      this.productList = result;
    }
  })
}
}
