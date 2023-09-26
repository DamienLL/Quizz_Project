//    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string')
//           ^

// Error: SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string
//     at Object.continueSession (/var/www/html/watt/S05/node_modules/pg/lib/crypto/sasl.js:24:11)
//     at Client._handleAuthSASLContinue (/var/www/html/watt/S05/node_modules/pg/lib/client.js:272:18)
//     at Connection.emit (node:events:513:28)
//     at /var/www/html/watt/S05/node_modules/pg/lib/connection.js:117:12
//     at Parser.parse (/var/www/html/watt/S05/node_modules/pg-protocol/dist/parser.js:40:17)
//     at Socket.<anonymous> (/var/www/html/watt/S05/node_modules/pg-protocol/dist/index.js:11:42)
//     at Socket.emit (node:events:513:28)
//     at addChunk (node:internal/streams/readable:324:12)
//     at readableAddChunk (node:internal/streams/readable:297:9)
//     at Readable.push (node:internal/streams/readable:234:10)

// Node.js v18.16.0
require('dotenv').config();

const { Client } = require('pg');

const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;
