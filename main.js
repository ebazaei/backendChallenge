const express =  require('express');
const app = express();


require('./database/mongoose');


app.use(express.urlencoded({ extended: true })) ;

const router = require('./router');
app.use(router);

app.set( 'view engine' , 'ejs');

app.use(express.static ('public' ));


app.listen(1981, () => console.log('Hello, you can see the Back End Challenge on this address => localhost:1981'));