#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let answer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin:",
    type: "number"
  }
]);

if (answer.pin === myPin) {
  console.log("Correct pin code!!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["Withdraw", "Check Balance"]
    }
  ]);
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amountType",
        message: "Select an amount option",
        type: "list",
        choices: ["$1000", "$2000", "$5000", "Other"]
      },
      {
        name: "customAmount",
        message: "Enter your amount",
        type: "number",
        when: (answers) => answers.amountType === "Other"
      }
    ]);
    let withdrawAmount =
      amountAns.amountType === "Other"
        ? amountAns.customAmount
        : parseInt(amountAns.amountType.substring(1)); 
    myBalance -= withdrawAmount;
    if (withdrawAmount <= myBalance) {
      console.log(`Your remaining balance is ${myBalance}`);
    } else {
      console.log("Insufficient Balance");
    }
  }
  if (operationAns.operation === "Check Balance") {
    console.log(`Your current balance is ${myBalance}`);
  }
} else {
  console.log("Incorrect pin number");
}
