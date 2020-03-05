const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeesArr = [];

function makeManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number??"
        }
    ]).then(answers=>{
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeesArr.push(manager);
        console.log(employeesArr)

    })
}

function makeEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"   
        },
    ]).then(answers=>{
        let employee = new employee(answers.name, answer.id, answers.email);
    })
}

function makeIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"   
        },
        {
            type: "input",
            name: "school",
            message: "What school do you go to?"
        },
    ]).then(ansewrs =>{
        let intern = new Intern(answers.name, answer.id, answers.email, answers.school);
    })
}

function makeEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"   
        },
        {
            type: "input",
            name: "githubName",
            message: "What is your Github name?"
        },
    ]).then(answers =>{
        let intern = new Intern(answers.name, answer.id, answers.email, answes.githubName);
    })
}

function something(){
    inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "What type of employee should you add?",
            choices: ["Manager", "Engineer", "Intern", "Employee", "I'm done"]
        }
    ]).then(answers=>{
        switch (answers.position) {
            case "Manager":
                makeManager();
                break;
            case "Engineer":
                makeEngineer();
                break;
            case "Intern":
                makeIntern();
            case "Employee":
                makeEmployee();
            default:
                makeHTMLFile();
                break;
        }
    })
}

something();

render(team);