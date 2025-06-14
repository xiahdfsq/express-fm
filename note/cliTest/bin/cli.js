#! /usr/bin/env node
// 表明该文件需要通过环境变量 PATH 里的 node 解释器来执行
const { program } = require('commander'); // 利用commander处理命令行参数
const myHelp = require("../lib/core/help")
const myHelpmyCommander = require("../lib/core/mycommander")

myHelp(program);
myHelpmyCommander(program);
/** 
program
  .option('-a, --numberA <value>', 'First number', parseFloat)
  .option('-b, --numberB <value>', 'Second number', parseFloat);

program.action(() => {
  const { numberA, numberB } = program.opts();

  if (numberA === undefined || numberB === undefined) {
    console.error('Both numbers must be provided');
    process.exit(1);
  }

  const result = numberA + numberB;
  console.log(`The sum of ${numberA} and ${numberB} is ${result}`);
});
*/



// const options = program.opts();
// const limit = options.first ? 1 : undefined;
//console.log(program.args[0].split(options.separator, limit));

program.parse(process.argv);
