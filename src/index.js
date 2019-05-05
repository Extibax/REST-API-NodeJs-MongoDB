import '@babel/polyfill';
import 'colors';
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_USER);

import server from './server';

const port = server.get('port');

async function main() {
    await server.listen(port);
    console.log('Server Port:'.america, port);
}

main();