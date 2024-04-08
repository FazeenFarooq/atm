#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar;
let pinCode = 1234;
let ansPin = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (ansPin.pin === pinCode) {
    console.log("Your PIN Code is Correct!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "What do you want to do?!",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let Withdraw = await inquirer.prompt([
            {
                name: "amount",
                message: "Type the amount you want to withdraw : ",
                type: "number",
            },
        ]);
        if (Withdraw.amount > myBalance) {
            console.log("insufficient amount!");
        }
        else {
            let amountLeft = myBalance - Withdraw.amount;
            console.log(` The Remaining Balance Is : ${amountLeft}`);
        }
    }
    if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "money",
                message: "Select the amount ",
                type: "list",
                choices: [
                    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000,
                    30000, 40000, 50000,
                ],
            },
        ]);
        if (fastCash.money > myBalance) {
            console.log("insufficient amount!");
        }
        else {
            let amountLeft = myBalance - fastCash.money;
            console.log(` The Remaining Balance Is : ${amountLeft}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(` Your Current Balance Is : ${myBalance}`);
    }
}
else {
    console.log("Pin Code is inccorect\nPlease enter the correct pincode!");
}
