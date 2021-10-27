/*Create a function that takes three collections of arguments and returns the sum of the product of numbers.*/

function product(num1, num2){
  return function (num3, num4){
    return function (num5, num6){
      return (num1 * num3 * num5) + (num2 * num4 * num6)
    }
  }
}

console.log(product(1, 2)(1, 1)(2, 3))

console.log(product(10, 2)(5, 0)(2, 3));

console.log(product(1, 2)(2, 3)(3, 4));

console.log(product(1, 2)(0, 3)(3, 0));