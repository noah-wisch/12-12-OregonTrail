console.log('Scope')

/**
 * A scope is a list of names that are available in a given block of code.
 * 
 * All varaibles and functions are created in a given scope, and only
 * exist as long as the scope exists.
 * 
 * In Old JS, scopes are created for each function.
 * In New JS, scopes are created for each block of code (between {}).
 * 
 * Here we have three scopes:
 *  - Global scope
 *      - x
 *      - count
 *  - Function count() scope
 *      - max
 *  - For loop scope
 *      - i
 */

let x = 5;
function count(max) {
    for (let i = x; i < max; i++) {
        console.log(i);
    }
}

count(15);

/*-----------------------------------------------*/
console.log('Objects')

let songName = 'My Heart Will Go On';
let songArtist = 'Celine Dion';
let songYear = '1996';
let favorite = true;

// objects let us combine related information into a single name
// - arrays have multiple parts & each is identified by an index
// - objects have multiple parts & each is a string
let song = { // same symbol as blocks ({}) but different meaning
    //  property: value,
    name: 'My Heart Will Go On',
    artist: 'Celine Dion',
    year: 1996,
    favorite: true,
};

console.log(song.name); // 'dot notation'

/* Car Lot Exmaple */

function makeSmallCar(paintColor) {
    // this function should return smallCar (size 1)
    return {
        size: 1,
        color: paintColor,
    };
}

function makeLargeCar(paintColor) {
    // this function should return largeCar (size 4)
    return {
        size: 4,
        color: paintColor,
    };
}

let zippy = makeSmallCar('white');
let drifter = makeSmallCar('green');
let shelby = makeLargeCar('gold');


let smallCar = {
    size: 1,
    color: 'white',
};

let largeCar = {
    size: 4,
    color: 'beige',
};

let lot = {
    cars: [], // lot.cars is an empty array
};

lot.cars.push(zippy);
lot.cars.push(shelby);
// console.log(lot.cars.length);

// spacesFilled(lot) should give us 5
function spacesFilled(specificLot) {
    // specificLot is our lot object

    let total = 0;
    for (let i = 0; i < specificLot.cars.length; i++) {
        let car = specificLot.cars[i];
        total = total + car.size; // 'size is a property of cars'
    }
    return total; // return the sum of all the properties
}

console.log(spacesFilled(lot)); //should print 5