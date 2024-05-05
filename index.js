#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = []; //shopper []
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todoList?",
        },
        {
            name: "secondQuestion",
            type: "confirm", //when type is confirm answer is in yes or no
            message: "whold you like to add more in your todoList?",
            default: "true",
        },
    ]);
    todoList.push(todoQuestions.firstQuestion);
    console.log(todoList);
    //The loop is running on the based of this variable condition
    condition = todoQuestions.secondQuestion;
}
