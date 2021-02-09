weaponsWithNoises = [
  {name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek'},
	{name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who'},
	{name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black'}
]

///////////////////////////////////////////////////////////////////////////////////
// solution:
function weaponsFromUniverse(universe) {
    const useableWeapons = weaponsWithNoises.filter(w => w.universe == universe)

    const useWeapon = (weaponName) => {
          const weapon = useableWeapons.find(w => weaponName == w.name)

          if (weapon) {
                console.log(`used ${weapon.name}: ${weapon.noise}`)
          } else {
                console.log(`${weaponName} is not a part of the ${universe} universe`)
          }
    }

    return useWeapon
}

// USAGE
const useStarWarsWeapon = weaponsFromUniverse('Star Wars')

useStarWarsWeapon('Blaster') // console logs 'used Blaster: Pew Pew'
useStarWarsWeapon('Noisy Cricket') // console logs 'Noisy Cricket is not a part of the Star Wars universe'





// EXAMPLE CONCEPT /////////////////////////////////////////////////////////////////////////////////////////////////
/*

function greaterThan(n) {
    return m => m > n;
}

let greaterThanEight = greaterThan(8);
console.log(greaterThanEight)
// expected output:  [Function]

console.log(greaterThanEight(11));
// expected output: true

// The syntax above can be tricky, but it is all ES6

// Equivalent to:
function greaterThan(n) {
    return function (m) {
        return m > n;
    }
}
*/ ///////////////////////////////////////////////////////////////////////////////////////////