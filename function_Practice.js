function logic(a, b) {
  console.log(a + b);
  console.log(a - b);
}
function calculateTax(value) {
  console.log(value * 0.1);
}
function def(a, b = 10) {
  console.log(a + b);
}
logic(10, 5);
calculateTax(2000);
def(5);