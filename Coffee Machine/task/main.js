// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let coffee = {
    water: 200, milk: 50, beans: 15
}


let hasWater = input(`Write how many ml of water the coffee machine has:`);
let hasMilk = input(`Write how many ml of milk the coffee machine has:`);
let hasBean = input(`Write how many grams of coffee beans the coffee machine has:`);

let needCoffee = input(`Write how many cups of coffee you will need:`);

function availableCoffee() {
    let waterForCoffee = hasWater / 200;
    let milkForCoffee = hasMilk / 50;
    let beanForCoffee = hasBean / 15;

    return Math.floor(Math.min(waterForCoffee, milkForCoffee, beanForCoffee));
}

if (needCoffee > availableCoffee()) {
    console.log(`No, I can make only ${availableCoffee()} cups of coffee`);
} else if (needCoffee == availableCoffee()) {
    console.log(`Yes, I can make that amount of coffee`);
} else if (needCoffee < availableCoffee()) {
    console.log(`Yes, I can make that amount  of coffee (and even ${availableCoffee() - needCoffee} more than that)`)
}


