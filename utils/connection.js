const mongoose = require('mongoose');
const config = require('../config.json');
const uri = config.Uri;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (!error) {
        console.log('Database connection success.');

    } else {
        console.log('Error while connecting to database.');
    }
});

const Users = require('./userModel'); 