/*Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.

maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456. // 3 replaced with 6 and 2 replaced with 5.


maxPossible(523, 76) ➞ 763
maxPossible(9132, 5564) ➞
9655 maxPossible(8732, 91255) ➞ 9755*/

function maxPossible(num1, num2){
  num1 = String(num1).split('').map(item => +item);
  num2 = String(num2).split('').map(item => +item);
  
  num2.sort((a, b) => b - a);

  let newArr = num1.map(item => {
    if(item < num2[0]){
      item = num2[0];
      num2.splice(0, 1)
      return item
    }
    else{
      return item;
    }
  })
  return +newArr.join('');
}

console.log(maxPossible(9328, 456))
console.log(maxPossible(9132, 5564))
console.log(maxPossible(8732, 91255))