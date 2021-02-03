// 1. Find all the words with more than 7 characters
const words1 = ['tardis', 'grok', 'frak', 'blaster', 'klingon', 'shepherd']

// const result = words1.filter(r => (r.length)>7 ? r :"");

const result = words1.filter(r => (r.length)>7);    /// Acts like real filter


console.log(result);                 /// o/p  : [ 'shepherd' ]
// console.log(words1[5]);              //  o/p  : shepherd
// expected output: Array ['shepherd']

// ----------------------------------------------------------
// 2. Find all even values
const words2 = [12, 13, 14, 15, 16, 17]

// expected output: Array [12, 14, 16]

const result1 = words2.filter(r => (r%2===0));

console.log(result1);

// ----------------------------------------------------------
// REAL LIFE EXAMPLES

// We often use filter to quickly pull all the items that share a status or other characteristic. For instance, create a list of all the active bounty hunters from the array below:

const hunters = [
    {
        name: 'Greedo',
        universe: 'Star Wars',
        status: 'active',
    },
    {
        name: 'Boba Fett',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Asajj Ventress',
        universe: 'Star Wars',
        status: 'unknown',
    },
    {
        name: 'Zam Wesell',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Jango Fett',
        universe: 'Star Wars',
        status: 'active',
    },
]

const result2 = hunters.filter(r => r.status === 'active');

console.log(result2);

// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]