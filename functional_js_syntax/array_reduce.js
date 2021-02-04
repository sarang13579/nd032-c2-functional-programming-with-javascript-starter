// 1. Take this disjointed sentence and turn it into a single string
const text = ['The ships', 'hung in the sky,', 'much the way', 'that bricks don`t']

// Your Code Here

const result = text.reduce((fused, single) => (fused+' ') + single);
console.log(result);

// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
    {
        team: 'A',
        score: 20
    },
    {
        team: 'B',
        score: 17
    },
    {
        team: 'C',
        score: 23
    },
    {
        team: 'D',
        score: 13
    }
]

// Your Code Here

const result1 = scores.reduce((x,y) => ((y.score)>=(x.score))? y : x);

console.log(result1.team);

// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
    {
        name: 'Serenity',
        speed: '4.2G',
    },
    {
        name: 'Cylon Raider',
        speed: '7.5G',
    },
    {
        name: 'Swordfish II',
        speed: '50G',
    },
    {
        name: 'Tie Fighters',
        speed: '4100G',
    }
]

// Your Code Here

const result2 = ships.reduce((previous, current) => {
    const cspeed = parseInt(current.speed.slice(0, -1));
    const previousSpeed = parseInt(previous.speed.slice(0, -1));
    // if (cspeed > previousSpeed) {
    //     return current;
    // }
    // return previous;
    return (cspeed>previousSpeed)?current:previous;   /// Return statement is important, for arrow function with more than 1 statements

}
);

console.log(result2.name);

// Expected output: Tie Fighters