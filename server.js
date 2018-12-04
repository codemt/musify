const express = require('express');
const mongoose = require('mongoose');

const app = express();


// mongo URI
const db = require('./config/keys').mongoURI;
// create route

// connect to mongo db
mongoose.connect(db).then( () => console.log('Mongo DB Connected'))
                    .catch(err => console.log(err))



app.get('/',(req,res) => {

        res.send('Hello');

})

const PORT = process.env.PORT || 8081;



app.listen(PORT,() => {

    console.log('Server listening on port '+PORT);

});






