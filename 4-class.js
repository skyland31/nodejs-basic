class Calculuator {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}
const calculatorObject = new Calculuator();
console.log(Calculuator.sum(1, 2));
console.log(calculatorObject.sum2(2, 3));
console.log(calculatorObject.multiply(10, 20));
