//aqui importamos nuestros modulos

require('dotenv').config();

const app = require("./app");
require('./database');

//inicializamos desde este modulo, el servidor

async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port: ', app.get('port'));
}

main();