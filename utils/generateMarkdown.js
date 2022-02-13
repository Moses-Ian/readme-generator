const licenseDictionary = {
	'MIT License': '[MIT License](https://opensource.org/licenses/MIT)',
	'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
	'BSD License': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
	'GPL License': '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
	'Mozilla Public License 2.0': '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)',
	'None': '',
};

const licenseBadgeDictionary = {
	'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
	'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
	'BSD License': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
	'GPL License': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
	'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
	'None': '',
};



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	return license == 'None' ? '' : licenseBadgeDictionary[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	return license == 'None' ? '' : `## License

${licenseDictionary[license]}`;	
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	console.log(data.license);
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
