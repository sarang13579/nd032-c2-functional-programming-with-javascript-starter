// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

function greet(){
    const time = new Date().getHours();
    const say = ((time > 12) && (time < 17)) ? "good afternoon" : "good morning";
    
    return say;
}

console.log(greet());

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------

function arr(items){
    const a = [];
    for(let i=items; i>=0; i--){
        a.push(i);
    }
    return a;
}

console.log(arr(8));