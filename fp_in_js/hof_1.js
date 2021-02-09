// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two

// const addTwo = (callback) => {
//   return callback() + 2
// }

// const result = addTwo(x*x);         

// console.log(result);

// const square = (x) => {
//   return x*x
// }

// const result = addTwo(square(2));
// console.log(result); // 6


// METHOD 1  ///////////////////////////////// 

// const addTwo = (callback) => {
//   return callback(2) + 2
// }
// const square = (x) => {
//   return x*x
// }
// const result = addTwo(square);
// console.log(result); // 6

// METHOD 2  //////////////////////////////////////

const addTwo = (callback, n) => {
  return callback(n) + 2 // the callback function here is the square function we passed to addTwo and it takes one number in its argument and returns the square of that number
}
const square = x => x*x;
console.log(addTwo(square, 2))

// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}

const greet = (a, b, c)=> {
 return createFullName(a,b,c);
}
// you might notice that this function is less than ideal - that's great! We'll talk about why next

console.log(greet('sarang', 'kakkoth', 'Mr'));