// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two
const x = 2;

const addTwo = (callback) => {
  return callback + 2
}

const result = addTwo(x*x);

console.log(result);

// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}

const greet = createFullName('sarang', 'kakkoth', 'Mr')
// you might notice that this function is less than ideal - that's great! We'll talk about why next

console.log(greet);