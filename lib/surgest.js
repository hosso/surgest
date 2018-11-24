const chalk = require('chalk')
const fs = require('fs')
const surge = require('surge')({ default: 'publish' })
const generatePassword = require('password-generator')
const cb = require('clipboardy')

module.exports = function(domain, user, randomSurfix) {
  const base = domain.replace(/^.*\//, '').replace(/\..*$/, '')
  const surfix = randomSurfix ? '-' + generatePassword() : ''
  const url = `https://${base}${surfix}.surge.sh`
  const pass = generatePassword()

  if (!fs.existsSync('./index.html')) {
    console.log(chalk.red('Error:'), 'index.html does not exists')
    process.exit(1)
  }

  fs.writeFileSync('./AUTH', `${user}:${pass}`)

  function onSuccess() {
    cb.writeSync(url)
    console.log(chalk.cyan(`${chalk.bold(url)} ${chalk.gray('[in clipboard]')}`))
    console.log(chalk.cyan(`user: ${chalk.bold(user)}`))
    console.log(chalk.cyan(`pass: ${chalk.bold(pass)}`))
    console.log(chalk.cyan('Deployment complete'))
  }

  surge.publish({ postPublish: onSuccess })(['.', url])
}
