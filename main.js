#! /usr/bin/env node
import inquirer from "inquirer";
const prompt = await inquirer.prompt([
    {
        name: "FistNumber",
        type: "number",
        message: "Enter Your First Number"
    },
    {
        name: "Operator",
        message: "Select One Of The Operator To Perform Action",
        type: "list",
        choices: ["Addition", "Substraction", 'Multiplication', 'Division', "Modulous"]
    },
    {
        name: "SecondNumber",
        type: "number",
        message: "Enter Your Second Number"
    }
]);
if (prompt.Operator === "Addition") {
    console.log(`\n Your Answer Is :${prompt.FistNumber + prompt.SecondNumber}`);
}
else if (prompt.Operator === "Substraction") {
    console.log(`\n Your Answer Is :${prompt.FistNumber - prompt.SecondNumber}`);
}
else if (prompt.Operator === "Multiplication") {
    console.log(`\n Your Answer Is :${prompt.FistNumber * prompt.SecondNumber}`);
}
else if (prompt.Operator === "Division") {
    console.log(`\n Your Answer Is :${prompt.FistNumber / prompt.SecondNumber}`);
}
else if (prompt.Operator === "Modulous") {
    console.log(`\n Your Answer Is :${prompt.FistNumber % prompt.SecondNumber}`);
}
else {
    console.log("invalid Operator");
}
