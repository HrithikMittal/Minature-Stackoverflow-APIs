var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');


//bring all routes
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const questions = require('./routes/api/questions');

var app = express();


// Middleware for bodyparser
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());


//mongoDB confriguration
const db = require('./setup/myurl.js').mongoURL;




//Attempt to connect to database - Promise
mongoose.connect(db)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));



// just for testing -> route
app.get('/', function (req, res) {
    // console.log('Hello I am happy');
    res.json({
        'message': 'HI'
    });
});


//actual route
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/question', questions);

var port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});