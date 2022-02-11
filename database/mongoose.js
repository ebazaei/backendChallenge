const mongooseConnectDB = require('mongoose');

let globalDB = 'mongodb+srv://ehsanbz:backendchallengedb@cluster0.2uxrs.mongodb.net/test';
let localDB = 'mongodb://localhost/backendchallengeebz';

mongooseConnectDB.connect(localDB)
        .then( () => console.log('...Successful connection established with DB...' ))
        .catch(err => console.log(err))

