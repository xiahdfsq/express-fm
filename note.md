# 学习node，学会写后端
B站学习资料：Node.js工程师养成计划快速入门到项目实战

## Node编程基础概要
node.js 可以看成js解析引擎。
### 文件操作与模块化操作
### 模块化编程
重点作用是代码的相对独立，独立开发，互不影响 
### npm 包管理器
先新建node目录文件，会在生成package文件时，加上个bin的命令行
npm link, 会把当前的命令挂载到全局的命令行当中
#! /user/bin/env node
这个指令作用是：让这个文件的代码要使用系统环境下的node运行这个代码
#### 全局移除链接
npm unlink
#### （可选）若忘记路径，直接通过包名卸载
npm uninstall -g my-library
#### 验证结果
npm list -g --depth=0

## node开发个web服务器

## mongodb
https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-on-os-x/
mongod要使用配置文件将 作为背景进程手动运行
mongod --config /opt/homebrew/etc/mongod.conf --fork
brew services start mongodb-community@8.0
brew services stop mongodb-community@8.0

mongosh
show dbs
use mydb // 切换数据库
退出：exit 或者 quit

/Users/hulijun/Library/Application Support/PremiumSoft CyberTech/Navicat CC/Common/Settings/0/0/MongoDB/mongo