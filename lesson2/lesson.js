// console.log(process.argv);

// var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv);

// console.log(process.env);
// console.log(process.env.USERNAME);
const chalk = require('chalk');
const { stdout } = require("process");
const os = require('os');

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function resultLog(data) {
    const fs = require('fs');

    fs.appendFile('log.txt', data, (err) => {
        if (err) throw err;        
      });
};


//Орел и решка. Вариант номер 1 через rl.on('line',...)

console.log("Выберите орел(1) или решка(2):");
rl.on('line', function (cmd) {
    if (cmd == '1' || cmd == 'орел') {
        cmd = 1;
    } else if (cmd == '2' || cmd == 'решка') {
        cmd = 2;
    } else {
        console.log('Вы ничего не выбрали.');
    }

    let winnerSide = Math.floor(Math.random() * 2) + 1;
    let result = (cmd == winnerSide ? '1' : '0');
    console.log(
        (winnerSide == '1' ? 'Выпал орел! ' : 'Выпала решка! ') +
        (result == '1' ? chalk.green('Вы выиграли! ') : chalk.red('Вы проиграли:( ')));

    resultLog(result);

    if (cmd === 'quit') {
        rl.close();
    }
});




//Орел и решка. Вариант номер 2 через rl.question()
// function game() {
//     rl.question(chalk.bold(`Привет, ${process.env.USERNAME}! Выберите орел(1) или решка(2):`) + os.EOL, (answer) => {

//         if (answer == '1' || answer == 'орел') {
//             gameResult(1, 'Вы выбрали орел. ');
//         } else if (answer == '2' || answer == 'решка') {
//             gameResult(2, 'Вы выбрали решку. ');
//         } else {
//             console.log('Вы ничего не выбрали.');
//             game();
//         }
//     });
// }
// function gameResult(answer, answerText) {
//     let winnerSide = Math.floor(Math.random() * 2) + 1;
//     let result = (answer == winnerSide ? '1' : '0');
//     resultLog(result);

//     console.log(/*answerText +*/
//         (winnerSide == '1' ? 'Выпал орел! ' : 'Выпала решка! ') +
//         (answer == winnerSide ? chalk.green('Вы выиграли! ') : chalk.red('Вы проиграли:( ')));
//     playAgain();
// }

// function playAgain() {
//     rl.question(chalk.bold('Сыграем еще? да/нет') + os.EOL, (answer) => {
//         if (answer == "да") {
//             game();
//         } else {
//             rl.close();
//         }
//     });
// }
// game();
