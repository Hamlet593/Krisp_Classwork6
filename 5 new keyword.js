/*Write a function that will work equivalent new keyword.*/

function Car(year, model){
  this.year = year;
  this.model = model;
  return null;
}

let newCar = new Car(2014, 'Ford Fusion')
// console.log(newCar);

function fakeNew(fn, ...args){
  const obj = Object.create(fn.prototype);
  const result = fn.call(obj, ...args);
  if(typeof result !== 'object' && typeof result !== 'function' || result === null){
    return obj
  }
  return result;
}

let newCarFromFakeNew = fakeNew(Car, 2014, 'Ford Fusion');
console.log(newCarFromFakeNew);