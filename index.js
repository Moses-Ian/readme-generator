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
    {
      type: 'input',
      name: 'description',
      message: 'What is your project description?',
		},
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions:',
		},
    {
      type: 'input',
      name: 'usage',
      message: 'What is your project usage?',
		},
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter contribution instructions:',
		},
    {
      type: 'input',
      name: 'tests',
      message: 'What are your project tests?',
		},
];

const promptUser = () => {
	return inquirer.prompt(questions);
};

promptUser()
	.then(answers => writeToFile(fileName, generateMarkdown(answers)))
	.then(result => console.log(result.message));