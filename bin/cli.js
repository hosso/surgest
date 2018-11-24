#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const pkg = require('../package')
const { surgest } = require('../lib')

program
  .version(pkg.version)
  .description(pkg.description)
  .arguments('<domain>')
  .option('-u, --user <name>', 'specify auth user', 'guest')
  .option('-r, --random', 'append a random suffix to the domain name')
  .action((domain, options) => {
    surgest(domain, options.user, options.random || false)
  })
  .parse(process.argv)

if (!process.argv.slice(2).length) {
  program.help()
}
