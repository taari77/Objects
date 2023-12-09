var item; //any type
//assign a object
item = { id: 1, name: "Samsung Galaxy" };
console.log(item.name); //ok 
//Accessing non existant property. No compiler error
console.log(item.price); //ok    
//You can assign a new object to same variable
item = { firstName: "Allie", lastName: "Grater" }; //ok
//Accessing non existant property. No compiler error
console.log(item.name); //ok
