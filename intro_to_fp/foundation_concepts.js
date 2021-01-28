const greet = (name, base_greeting) => {
    const prnt = `${base_greeting} ${name}`;
    return console.log(prnt);
}

let greeting = 'Hello, ';

 greet('Arthur.', greeting);
// now we can reuse greeting, and the greet function is pure

greet('Arthurs.', greeting);
// expected output: 
//  Hello, Arthur. 
//  Hello, Arthur.