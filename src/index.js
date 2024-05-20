#!/usr/bin/env node

const { program } = require("commander");

program
    .version("1.0.0")
    .description("Buzz CLI")
    .option("-n, --name <type>", "Add your name")
    .action(options => {
        console.log(`Hey, ${options.name}!`);
    });

program.parse(process.argv);
