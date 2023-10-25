//% chalk
//import chalk from 'chalk';
//console.log(chalk.red('Testo'));



//% Process
//console.log(process)
/* console.log(process.versions)
console.log(process.env)
console.log(process.cwd())
process.exit([console.log('Processo terminato')]) */

//console.log(process.argv)



//% Yargs
const cliArgs = require('yargs').argv;
const yargs = require('yargs');
const { getUser } = require('./users');

//# yargs.argv
//console.log(cliArgs)
//console.log(cliArgs._)

//# yargs
//console.log(yargs)

//# yargs.command()
    yargs.command({
        command: 'get',
        describe: 'Ricerca utente dal nome',
        builder: {
            name: {
                describe: 'Nome dell\'utente da cercare',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            const user = getUser(argv.name);
            console.log(user);
        }
    });
    yargs.parse();

    //console.log(yargs)