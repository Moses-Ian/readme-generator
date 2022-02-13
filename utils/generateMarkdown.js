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

function generateMarkdown(data) {
  return `# ${data.title}

${licenseBadgeDictionary[data.license]}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${licenseDictionary[data.license]}

## Questions

<https://github.com/${data.profile}>

<${data.email}>
`;
}

module.exports = generateMarkdown;
