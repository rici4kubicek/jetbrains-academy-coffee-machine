// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let water = Number(input('Write how many ml of water the coffee machine has:\n'));
let milk = Number(input('Write how many ml of milk the coffee machine has:\n'));
let coffee = Number(input('Write how many grams of coffee beans the coffee machine has:\n'));
let cups = Number(input('Write how many cups of coffee you will need:\n'));

let availableCups = 0;

if (cups * 200 >= water) {
    availableCups = (water / 200).toFixed();
    if (cups * 50 >= milk) {

        if (cups * 15 >= coffee) {

        }
    }
}


//console.log('Write how many cups of coffee you will need:\n');

console.log('For ' + cups + ' cups of coffee you will need:');
console.log('' + 200 * cups + ' ml of water');
console.log('' + 50 * cups + ' ml of milk');
console.log('' + 15 * cups + ' g of coffee beans');

/*console.log('Starting to make a coffee\n' +
    'Grinding coffee beans\n' +
    'Boiling water\n' +
    'Mixing boiled water with crushed coffee beans\n' +
    'Pouring coffee into the cup\n' +
    'Pouring some milk into the cup\n' +
    'Coffee is ready!')*/
