#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "numb1",
        message: " Enter First Value! ",
        type: "input",
        validate: value => !isNaN(value) || 'Please enter a valid number.'
    },
    {
        name: "operator",
        message: "Select An Operator..",
        type: "list",
        choices: ["+", "-", "*", "/", "%"]
    },
    {
        name: "numb2",
        message: "Enter Second Value!",
        type: "input",
        validate: value => !isNaN(value) || 'Please enter a valid number.'
    },
]);
//for Addition:-
if (answer.operator === "+") {
    //    console.log(chalk.bgGray.greenBright(`The Sum Of first value i.e ${answer.numb1} and second value i.e ${answer.numb2} = `, answer.numb1 + answer.numb2)
    //issue here i.e answer.numb1 and answer.numb2 are likely being treated as strings, so when I use answer.numb1 + answer.numb2, JavaScript concatenates them instead of adding them numerically.
    //solution is that:To fix this, we need to convert the input values to numbers before performing the addition. we can use the parseInt() or parseFloat() functions to do this. i.e console.log(chalk.bgGray.greenBright(`The Sum Of first value i.e ${answer.numb1} and second value i.e ${answer.numb2} = `, parseInt(answer.numb1) + parseInt(answer.numb2));
    //Alternatively, we can also use the Number() function to convert the input values to numbers:
    console.log(chalk.bgGray.greenBright(`The Sum Of first value i.e ${answer.numb1} and second value i.e ${answer.numb2} = `, Number(answer.numb1) + Number(answer.numb2)));
}
//For Subtraction:
if (answer.operator === "-") {
    console.log(chalk.bgGray.greenBright(`The Difference Of first value i.e ${answer.numb1} and second value i.e ${answer.numb2} = `, Number(answer.numb1) - Number(answer.numb2)));
}
//For Multiplication:
if (answer.operator === "*") {
    console.log(chalk.bgGray.greenBright(`The Product Of first value i.e ${answer.numb1} and second value i.e ${answer.numb2} = `, Number(answer.numb1) * Number(answer.numb2)));
}
//For Divison:
if (answer.operator === "/") {
    console.log(chalk.bgGray.greenBright(`The Division Of first value i.e ${answer.numb1} by second value i.e ${answer.numb2} = `, Number(answer.numb1) / Number(answer.numb2)));
}
//For Remainder:
if (answer.operator === "%") {
    console.log(chalk.bgGray.greenBright(`The Remainder Of first value i.e ${answer.numb1} and second value i.e ${answer.numb2} = `, Number(answer.numb1) % Number(answer.numb2)));
}
//For Power:-
let confirmation = await inquirer.prompt([
    {
        name: "confirmation_Message",
        type: "confirm",
        message: "Do you want to take the power of any base value?",
        default: false
    }
]);
if (confirmation.confirmation_Message) {
    let exponent = await inquirer.prompt([
        {
            name: "Base",
            message: "Enter Base Value!",
            type: "input",
            validate: value => !isNaN(value) || 'Please enter a valid number.'
        },
        {
            name: "expo_operator",
            message: "Select An Operator..",
            type: "list",
            choices: ["^"]
        },
        {
            name: "Power",
            message: "Enter Power!",
            type: "input",
            validate: value => !isNaN(value) || 'Please enter a valid number.'
        }
    ]);
    const base = Number(exponent.Base); // Numeric conversion of input values declared in a variable
    const power = Number(exponent.Power); // Numeric conversion of input values declared in a variable
    if (exponent.expo_operator === "^") {
        console.log(chalk.bgGray.greenBright(`The Base value i.e ${base} to the Power ${power} = ${Math.pow(base, power)}`));
    }
}
else {
    console.log(chalk.yellow("OK..."));
}
// Author: Huma Mohsin
