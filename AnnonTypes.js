var item1;
var item2 = { id: 1, name: "Samsung Galaxy" };
item1 = item2;
var item;
item = { id: 1, name: "SamSung", price: 100
};
function calculate(qty, item) {
    return qty * item.price;
}
var result = calculate(10, item);
console.log(result);
