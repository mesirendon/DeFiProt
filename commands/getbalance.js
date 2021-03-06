
const rskapi = require('rskapi');
const utils = require('./lib/utils');

const config = utils.loadConfiguration('./config.json');

const address = utils.getAddress(config, process.argv[2]);

console.log('address', address);

const client = rskapi.client(config.host);

(async function() {
    const balance = await client.balance(address);
    
    console.log('balance', balance);
})();

