const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        default: "https://www.hiteshchoudhary.com/imgs/users/003-boy.png"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Person = mongoose.model("myPerson", PersonSchema);