import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`The word count of your sentence is: ${words.length}`);
