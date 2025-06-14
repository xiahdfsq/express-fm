const inquirer = require("inquirer");
const download  = require("download-git-repo");
const ora = require("ora");
const config = require("../../config");
const chalk = require("chalk");

const myAction = async (project, other) => {
    // 逻辑代码模块化拆分
    // console.log(project, other);
    const prompt = inquirer.createPromptModule();
    const answers = await prompt([
        {
            type: 'list',
            name: 'framework',
            message: '请选择使用的框架',
            choices: config.framework 
        }
    ])
    //console.log("answers>>>", answers);
    const frameworkUrl = config.url[answers.framework];
    
    if(frameworkUrl) {
        const spinner = ora().start()
        spinner.color = 'yellow';
        spinner.text = 'loading...';
        download('direct:'+frameworkUrl, project, {clone: true},function (err) {
            console.log(err ? 'download Error' : 'download Success')
            if(err){
                spinner.fail('download Error')
            } else {
                spinner.succeed('download Success')
                console.log(chalk.blue.bold("download done, you can run now" ));
                console.log("cd", project);
                console.log('npm install')
                console.log('npm run dev')
            }
            spinner.stop()
        })
    } else {
        console.log(answers.framework + ' framework does not exist')
    }
    
}

module.exports = myAction;  