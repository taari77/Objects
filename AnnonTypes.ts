let item1 : { id:number, name:string}
let item2 = { id:1, name: "Samsung Galaxy" } 
item1=item2
let item : {
    id:number,
    name:string,
    price:number
};
item ={id:1,name:"SamSung",price:100
}
function calculate(qty:number, item:{id:number,name:string,price:number}):number{
    return qty*item.price
}
let result =calculate(10,item)
console.log(result);

