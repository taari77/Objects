var item;
item = { id: 1, name: "Samsung", price: 100 };
function calculate(qty, items) {
    return qty * item.price;
}
var result = calculate(1000, item);
console.log(result);
