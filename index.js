const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const {writeToFile} = require('./utils/write.js');

const fileName = './dist/README.md';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
			validate: input => {
				if (input) {
					return true;
				} else {
					console.log('Please enter your project title!');
					return false;
				}
      }
		},
];

const promptUser = () => {
	return inquirer.prompt(questions);
};

promptUser()
	.then(answers => writeToFile(fileName, generateMarkdown(answers)))
	.then(result => console.log(result.message));