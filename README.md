
1.	step05a_objects
An object is a collection of key-value pairs. Each key-value pair is known as a property, where the key is the name of the property and value its value

Creating Objects in TypeScript
There are a few ways in which you can create an object in TypeScript. 
One of the is to use the Object Literal Syntax. It consists of a list of key-value pairs, each separated by a comma and wrapped inside curly braces.

let person = {
  firstName: "Allie",
  lastName: "Grater",
  age: 50,
  
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

OBJECTS WITHOUT TYPE
We can create objects in TypeScript without assigning a type or using any type so as to opt out of type checking.
Objects with Explicit Any Type
When we assign any type explicitly to a variable, the Typescript compiler does not make type checking on the variable.
In the example, even though the item object does not have a price property, the compiler does not throw any errors. We can also assign a new object to the item object without getting any errors from the compiler.

 
Objects with Implicit Any Type
When we do not assign a type and TypeScript fails to infer its type from the assignment or from its usage, then the compiler assigns the type any to it. But how the compiler behaves depends on the noImplicitAny compiler option. You can enable or disable this in the tsconfig file.
noImplicitAny set to false
When set to false, the code behaves exactly in the same way as if you have an explicitly assigned type any. i.e. Typescript treats the variable as of type Any.

noImplicitAny set to true
When noImplicitAny is set to true, Typescript does not treat the variable as any. It now tries to infer the type at every usage of item variable.
 

 
OBJECT WITH TYPE
Typescript allows us to create types for objects and annotate the variable with that type. The object type consists of Key type pairs (instead of key value pairs which you see in an object) separated by either a comma or a semicolon.
The following is an example of an object type consisting of two properties. id property is of type number and name property is of type string.
{   
   id:number;      
   name:string  
}	 


With our item variable annotated with an object type, the compiler throws an error when we try to access a non-existent property or when we assign a new object which has a completely different type.
 
 
 

Assigning Types to Objects
There are a few ways by which we can create an object with a concrete type for objects. They broadly fall into two categories. One is the Anonymous Type and the other one is the Named Type.
Anonymous Types
The Anonymous object types are types without any name. We create them on the fly.
Anonymous object types are useful when you need to define a type for a specific object quickly, without creating a separate interface or type declaration. However, for more reusable and maintainable code, it's often recommended to define named types using interfaces or type aliases.
The item1 & item2 variables in the following example give a type of object consisting of id & name property.

let item1 : { id:number, name:string}
let item2 = { id:1, name: "Samsung Galaxy" } 

 
Named Types
We can also name our object type, which allows us to re-use the type again and again. There are two ways in which you can name an object type in TypeScript. One is Type Alias and the other one is Interface.
Type Alias
The Type Aliases in Typescript allow us to give a custom name to an existing type. The syntax starts with the keyword type followed by the name you wish to give to the new type. It is then followed by an assignment operator and then the type literal.
The following example creates a type alias product.
 

Interface
An interface declaration is another way to name an object type. The syntax starts with the keyword interface followed by the name you wish to give to the interface. It is then followed by the type literal.

 


TOPICS COVERED IN CLASS 06- DATD 09 DECEMBER 2023
1.	step05a_objects
2.	step05b_object_aliased
3.	step05c_structural_typing_object_lit
4.	step05d_nested_objects

