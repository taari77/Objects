var item;
item = { id: 1, name: "Samsung", price: 100 };
function calculate(qty, item) {
    return qty * item.price;
}
var result = calculate(10, item);
console.log(result);
