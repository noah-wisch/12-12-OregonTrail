function makeTraveler(name, food) {
    // this function should return smallCar (size 1)
    return {
        name: name,
        amount: Math.floor(Math.random() * food),
        isHealthy: true,
    };
}
let deshaun = makeTraveler('Deshaun', 50);
let dabo = makeTraveler('Dabo', 25);
console.log(deshaun);
console.log(dabo);

function makeWagon(capacity) {
    return {
        passengers: [],
        capacity: 5,
    };
}

let catBus = makeWagon('CAT');
// console.log(catBus);

function hunt(traveler) {
    let hunted = Math.random()
    if (hunted < 0.5) {
        hunted = 0
    } else {
        traveler.amount = traveler.amount + 100;
    }
    return traveler;
}
console.log(hunt(dabo));

function eat(traveler) {
    if (traveler.amount > 20) {
        traveler.amount = traveler.amount - 20
    } else {
        traveler.isHealthy = false;
    }
    return traveler;
}
console.log(eat(dabo));

let tigerTransit = {
    wagons: [],
};

tigerTransit.wagons.push(dabo);
tigerTransit.wagons.push(deshaun);

function join(wagon, traveler) {
    let total = 0;
    for (let i = 0; i < wagon.traveler; i++) {
        let transit = wagon.traveler[i];
        total = total + wagon.capacity;
    }
    return total;
}
console.log(join(tigerTransit));


function quarantine(wagon) {
    // 1. Use variant of function above to add traveler
    // 2. randomize healthy value
    // 3. return true if healthy else false
}

function food(wagon) {
    // 1. check number of travelers in wagon
    // 2. total amount of food by calling wagon.amount in the return?
}

let wagon = makeWagon(5);

hunt(deshaun); // maybe get more food
eat(dabo);
eat(dabo); // Dabo is hungry
join(wagon, deshaun);
join(wagon, dabo);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food