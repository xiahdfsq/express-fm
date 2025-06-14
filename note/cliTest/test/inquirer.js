const inquirer = require("inquirer"); 

const prompt = inquirer.createPromptModule();
prompt([
    {
        type: 'input',
        name: 'username',
        message: '你的用户名'
    }
  ])
  .then((answers) => {
    console.log("answers>>>", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });