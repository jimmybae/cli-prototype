# GMobile CLI
This is a tool to generate project of GMobile from the terminal.

## Prerequisites
Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together
with NPM 3 or higher

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [Libraries](#libraries)
* [License](#license)

## Installation
```sh
npm install -g https://github.com/jimmybae/cli-prototype.git
```

## Usage
#### 1. gmobile -h
```sh
$ gmobile -h

  Usage: gmobile <command> [argument]

  GMobile CLI


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    init [options] <projectName>  Initializes a GMobile project
    serve                         Easily test your web locally while developing.
```
#### 2. gmobile init `<projectName>`
```sh
$ gmobile init -h

  Usage: init [options] <projectName>

  Initializes a GMobile project


  Options:

    -w, --web     Initializes web template
    -m, --mobile  Initializes mobile template
    -h, --help    output usage information
```
#### 3. gmobile serve
```sh
$ gmobile serve -h

  Usage: serve [options]

  Easily test your web locally while developing.


  Options:

    -h, --help  output usage information
```

## Examples
#### 1. gmobile init `my-project`
```sh
$ gmobile init my-project
? Select project type (Use arrow keys)
❯ web
  mobile
[info] Project <my-project> initialized successfuly.
```
#### 2. gmobile serve
```sh
$ cd my-project
$ gmobile serve
Server running at http://localhost:3000
```

## Libraries
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - A collection of common interactive command line user interfaces.
- [commander.js](https://github.com/tj/commander.js) - node.js command-line interfaces made easy.
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right.
- [express](https://github.com/expressjs/express) - Web framework for node.
- [open](https://github.com/pwnall/node-open) - Open a file or url in the user's preferred application.

## License
MIT
