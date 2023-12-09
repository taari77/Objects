let person = {
    firstName: "Allie",
    lastName: "Grater",
    age: 50,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
let fullNameResult = person.fullName();
console.log(fullNameResult);
export {};
