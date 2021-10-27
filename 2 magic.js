/*Create a function that calls an object property with procedural like style.*/

function magic(str){
  
  magic.replace = function(str, from, to){
    return str.replace(from, to)
  };
  
  magic.myLength = function(str){
    return str.length
  };
  
  magic.trim = function(str){
    return str.trim();
  };
  
  magic.slice = function(arr, from, to){
    return arr.slice(from, to)
  }
  
};
magic()


console.log(magic.replace('azerty', 'a', 'A'));
console.log(magic.myLength('hello word'));
console.log(magic.trim('  javascript is awesome  '));
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4));