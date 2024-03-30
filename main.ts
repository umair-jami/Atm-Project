#! /usr/bin/env node

import inquirer from "inquirer";

let pinNumber:Number= 1999;
let totalBalance=10000

let pinEnterd =await inquirer.prompt(
  [
    {
      name:"pin",
      message:"Enter your pin number",
      type:"number"
    }
  ]
)
//condition
if(pinEnterd.pin===pinNumber){
  let atmQuestion=await inquirer.prompt(
    [
      {
        name:"accountType",
        message:"select your account type",
        type:"list",
        choices:[
          "Current account",
          "Saving account"
        ]
      },
      {
        name:"transMethod",
        message:"select your transection type",
        type:"list",
        choices:[
          "cash",
          "fastCash"
        ]

      }
    ]
  );
  if(atmQuestion.transMethod==="cash")
  {
    let cashWithDrwalAmount=await inquirer.prompt(
      [
        {
          name:"withdrawl",
          message:"Enter your withdrawl amount",
          type:"number"
        }
      ]
    )
    if(totalBalance>=cashWithDrwalAmount.withdrawl){
      totalBalance-=cashWithDrwalAmount.withdrawl
      console.log(`Your total balance is ${totalBalance}`)
    }else{
      console.log("Insuficient balance")
    }
  }else{
    let fastCashAmount=await inquirer.prompt(
      [
        {
          name:"fastCash",
          message:"Select fastCash amount",
          type:"list",
          choices:[
            "1000",
            "2000",
            "5000"
          ]
        }
      ]
    )
    if(totalBalance>=fastCashAmount.fastCash){
      totalBalance-=fastCashAmount.fastCash
      console.log(`Your total balance is ${totalBalance}`)
    }else{
      console.log("Insuficient balance")
    }
  }
}else{
  console.log("Enter correct Pin!!!!")
}
