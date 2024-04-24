#! /usr/bin/env node

import inquirer from "inquirer"

const answers: {Sentence: string} = await inquirer.prompt
([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "



    }
])

const words = answers.Sentence.trim().split(" ") 

console.log(words)

console.log(`The word count of your sentence is: ${words.length}`)