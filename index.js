const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please give instructions for installation',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how your project can be used',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please outline any contributions guidelines',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please outline test instructions',
        },
        {
            type: 'list',
            name: 'licences',
            message: 'Please select a licence from the list',
            choices: ['GNU GPLv3', 'MIT Licence', 'Unlicence']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username', 
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please outline the best way for people to contact you for further information',
        },
    ]);
};

function generateBadgeUrl(licences){ 
    return `https://img.shields.io/badge/licence-${encodeURIComponent(licences)}-blue`;
}

function generatreLicenceInfo(licences){
    if (licences === "GNU GPLv3"){
        return "GNU GPLv3 licence info"
    };
    if (licences === "MIT Licence"){
        return "MIT licence info"
    };
    if (licences === "Unlicence") {
        return "Unlicence info"
    }

}

const generateREADME = ({title, description, installation, usage, contribution, tests, licences, github, questions}) =>
`# ${title} 

## Licences 

![Licence](${generateBadgeUrl(licences)})
${generatreLicenceInfo(licences)}
## Description

${description}

## Table of Contents

- [Installation](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Licences](#licences)
- [Questions](#questions)

## Installation Instructions

${installation}

## Usage Insturctions

${usage}

## Contribution Guidelines

${contribution}

## Test Instructions

${tests}

## Questions
To find out more information about this repo please visit my github page https://github.com/${github}

Need for info?
${questions}
`
const create = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README1.md', generateREADME(answers)))
    .then(()=> console.log('Successfully wrote to README.md'))
    .catch((err) => console.log(err));
};

create();