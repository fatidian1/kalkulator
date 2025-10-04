const readline = require('node:readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
const {calculator} = require('./calculator');
rl.question("Co Pan chce policzyć? ", input => {
    const result = calculator(input);
    console.log('Wynik działania: ', result)
    rl.close();
})
