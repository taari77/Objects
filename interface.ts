interface  product {   
    id:number;      
    name:string ;
    price:number
 }
 let item:product;
 item = {id:1,name:"Samsung",price:100};
function calculate(qty:number, items:product):number {
    return qty*item.price
}
let result =calculate(1000,item)
console.log(result);
