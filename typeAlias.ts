type product = {   
    id:number;      
    name:string ;
    price:number
 }
 let item:product;
 item = {id:1,name:"Samsung", price:100};

 function calculate(qty:number,item:product):number {
    return qty*item.price}
 let result = calculate (10,item)
 console.log(result);
