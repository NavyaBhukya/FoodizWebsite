import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../../data-type';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient)  { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food =>food.id == id)!;
  }
  getAllFoodByTag(tag:string) : Foods[]{
  return tag=="All"?
   this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
  //adding product
  addProduct(data:product){
  return this.http.post("http://localhost:3000/products",data)
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/products')
  }
  deleteProduct(id:number){
   return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getAllTag():Tag[]{
   return[
    {name:'All',count:18},
    {name:'FastFood',count:3},
    {name:'Pizza',count:6},
    {name:'Lunch',count:1},
    {name:'Stater',count:3},
    {name:'Fry',count:8},
    {name:'Soup',count:14},
    {name:'Snak',count:5},
   ]
  }
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Tandoori Roti',
        cookTime:'Cook Time 10-20',
        price:210,
        favorite:true,
        origins:['India'],
        star:4.1,
        imageUrl:'/assets/img1.jpg',
        tags: ['Lunch','Pizza']
      },
      {
        id:2,
        name:'Butter Nons',
        cookTime:'Cook Time 10-15',
        price:220,
        favorite:false,
        origins:['India'],
        star:4.0,
        imageUrl:'/assets/img2.jpg',
        tags: ['Lunch','Pizza']
      },
      {
        id:3,
        name:'Frypiece Biryani',
        cookTime:'Cook Time 30-40',
        price:350,
        favorite:true,
        origins:['India'],
        star:4.9,
        imageUrl:'/assets/img3.jpg',
        tags: ['Lunch','Pizza']
      },
      {
        id:4,
        name:'Double chese Pizza',
        cookTime:'Cook Time 20-30',
        price:250,
        favorite:true,
        origins:['Italy'],
        star:4.1,
        imageUrl:'/assets/img4.jpg',
        tags: ['Pizza','Pizza']
      },
      {
        id:5,
        name:'Milk Cake',
        cookTime:'Cook Time 10-20',
        price:199,
        favorite:false,
        origins:['India'],
        star:5.0,
        imageUrl:'/assets/img5.jpg',
        tags: ['desserts','Pizza']
      },
      {
        id:6,
        name:'Cup Cakes',
        cookTime:'Cook Time 5-10',
        price:70,
        favorite:false,
        origins:['America'],
        star:3.8,
        imageUrl:'/assets/img6.jpg',
        tags: ['desserts','Pizza']
      },
      {
        id:7,
        name:'Corn Pizza',
        cookTime:'Cook Time 10-20',
        price:170,
        favorite:true,
        origins:['Italy'],
        star:4.4,
        imageUrl:'/assets/img7.jpg',
        tags: ['Pizza','Pizza']
      },
      {
        id:8,
        name:'Pan Cakes',
        cookTime:'Cook Time 5-10',
        price:140,
        favorite:false,
        origins:['ancient Greece'],
        star:2.9,
        imageUrl:'/assets/img8.jpg',
        tags: ['desserts','Pizza']
      },
      {
        id:9,
        name:'Chicken Megistics',
        cookTime:'Cook Time 40-45',
        price:290,
        favorite:false,
        origins:['India'],
        star:4.9,
        imageUrl:'/assets/img9.jpg',
        tags: ['Stater','Pizza']
      },
      {
        id:10,
        name:'ramen',
        cookTime:'Cook Time 30-40',
        price:200,
        favorite:true,
        origins:['Japan'],
        star:4.0,
        imageUrl:'/assets/img10.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:11,
        name:'Noodels',
        cookTime:'Cook Time 10-25',
        price:170,
        favorite:false,
        origins:['Cahina'],
        star:3.5,
        imageUrl:'/assets/img11.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:12,
        name:'SandWchich',
        cookTime:'Cook Time 10-15',
        price:80,
        favorite:true,
        origins:['England'],
        star:4.0,
        imageUrl:'/assets/img12.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:13,
        name:'Fish Fry',
        cookTime:'Cook Time 15-25',
        price:220,
        favorite:false,
        origins:['India'],
        star:4.1,
        imageUrl:'/assets/img13.jpg',
        tags: ['starter','Pizza']
      },
      {
        id:14,
        name:'Soba Noodels',
        cookTime:'Cook Time 10-20',
        price:240,
        favorite:true,
        origins:['Korea'],
        star:3.2,
        imageUrl:'/assets/img14.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:15,
        name:'Daal Tadka',
        cookTime:'Cook Time 20-30',
        price:180,
        favorite:false,
        origins:['India'],
        star:3.9,
        imageUrl:'/assets/img15.jpg',
        tags: ['Lunch','Pizza']
      },
      {
        id:16,
        name:'Samosa',
        cookTime:'Cook Time 5-10',
        price:80,
        favorite:true,
        origins:['India'],
        star:4.7,
        imageUrl:'/assets/img16.jpg',
        tags: ['Snak','Pizza']
      },
      {
        id:17,
        name:'Spicy Fries',
        cookTime:'Cook Time 5-10',
        price:120,
        favorite:true,
        origins:['India'],
        star:4.7,
        imageUrl:'/assets/img19.jpg',
        tags: ['Fry','Pizza']
      },
      {
        id:18,
        name:'FrenchFries',
        cookTime:'Cook Time 5-10',
        price:60,
        favorite:true,
        origins:['India'],
        star:4.7,
        imageUrl:'/assets/img20.jpg',
        tags: ['Fry','Pizza']
      },
      {
        id:19,
        name:'ChikenSoup',
        cookTime:'Cook Time 5-10',
        price:210,
        favorite:true,
        origins:['India'],
        star:4.7,
        imageUrl:'/assets/img21.jpg',
        tags: ['Soup','Pizza']
      },
      {
        id:20,
        name:'Manchuriyan',
        cookTime:'Cook Time 5-10',
        price:110,
        favorite:true,
        origins:['India'],
        star:4.7,
        imageUrl:'/assets/img22.jpg',
        tags: ['Stater','Pizza']
      },
      {
        id:21,
        name:'FriedRice',
        cookTime:'Cook Time 5-10',
        price:180,
        favorite:true,
        origins:['India'],
        star:4.7,
        imageUrl:'/assets/img23.jpg',
        tags: ['FastFood','Pizza']
      }
      
    ];  
  }
}
