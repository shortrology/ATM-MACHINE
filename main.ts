#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let MyBalance = 5000; // Dollar
let MyPin = 456;

// print welcom message
console.log(
  chalk.yellowBright("\n welcom to code with Bushra - ATM Machine\n")
);

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: chalk.bgGreenBright("Enter your pin code:"),
  },
]);

if (pinAnswer.pin === MyPin) {
  console.log(chalk.green("\ncorrect pin code!\n"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      Message: "please select option",
      type: "list",
      choices: ["withdraw Ammount", "check Balance"],
    },
  ]);

  if (operationAns.operation === "withdraw Ammount") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdrawMethod",
        type: "list",
        message: " select a withdrawal Method:",
        choices: ["Fast cash", "Enter Amount"],
      },
    ]);

    if (withdrawAns.withdrawMethod === "Fast cash") {
      let FastCashAns = await inquirer.prompt([
        {
          name: "FastCash",
          type: "list",
          message:  chalk.greenBright ("select Amount:"),
          choices: [1000, 2000, 5000, 10000, 20000, 50000],
        },
      ]);
      if (FastCashAns.FastCash > MyBalance) {
        console.log(chalk.bgRed("Insufficient Balance"));
      } else {
        MyBalance -= FastCashAns.FastCash;
        console.log(`${FastCashAns.FastCash} withdraw successfully`);
        console.log(chalk.blue(`your Remaining Balance is: ${MyBalance}`));
      }
    } else if (chalk.bgGreenBright(withdrawAns.withdrawMethod === "Enter Amount")) {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          type: "number",
          message: chalk . yellowBright("Enter the amount to withdraw:"),
        },
      ]);
      if (amountAns.amount > MyBalance) {
        console.log(chalk.red("Insufficient Balance"));
      }
    } else {
      MyBalance -= withdrawAns.amount;
      console.log(`$(amountAns.amount) withdraw successfully`);
      console.log(`your Remaining Balance is: ${MyBalance}`);
    }
  } else if (operationAns.operation === "check Balance") {
    console.log(chalk.bgGreenBright("your Account Balance is : ${MyBalance}"));
  }
} else {
  console.log(chalk.red("incorrect pin number"));
}


