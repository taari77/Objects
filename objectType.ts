let item : {
    id:number, 
    name:string}         //Annotating with the type
 
 
item = {  
    id:1, 
    name: "Samsung Galaxy" 
}                           //Assigning a value
console.log(item.name)      //ok
 
// console.log(item.price)   //compiler error   
// //Property 'price' does not exist on type '{ id: number; name: string; }'.

// item = {  id:1, name: "Samsung Galaxy", price:100 }  //compiler error   
// //Type '{ id: number; name: string; price: number; }' is not assignable to type '{ id: number; name: string; }'.