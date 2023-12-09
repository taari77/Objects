var item; //noImplicitAny is set to true
//assign a object
item = { id: 1, name: "Samsung Galaxy" };
console.log(item.name); //ok 
//Accessing non existant property.  compiler error
console.log(item.price);
//You can assign a new object to same variable
item = { firstName: "Allie", lastName: "Grater" }; //ok
console.log(item.firstName); //ok
//Accessing non existant property. compiler error
console.log(item.name);
