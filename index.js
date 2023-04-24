function add(a, b) {
    return a + b
}
console.log(add(2, 3));

function multiply(a, b) {
    return a * b
}
console.log(multiply(2, 3));

function divide(a, b) {
    return a / b
}
console.log(divide(8, 2));
function subtract(a, b) {
    return a - b
}
console.log(subtract(8, 2));

function increment(n) {
    return n++;
  }
  console.log(increment(9));
  function increment(n) {
    n++;
    return n;
  }
  function decrement(n) {
    n--;
    return n;
  }
  function makeInt(n) {
    return parseInt(n, 10);
  }
  function preserveDecimal(n) {
    let parsedNumber = parseFloat(n);
    if (isNaN(parsedNumber)) {
      return NaN;
    } else {
      return parsedNumber;
    }
  }
  function preserveDecimal(n) {
    const parsedNumber = parseFloat(n);
    return isNaN(parsedNumber) ? NaN : parsedNumber;
  }
  
  
  
  
  