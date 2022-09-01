// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

//console.log('Write how many cups of coffee you will need:\n');
let cups = Number(input('Write how many cups of coffee you will need:\n'));
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
