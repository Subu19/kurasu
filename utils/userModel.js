const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: "Required"
    },
    username: {
        type: String,
        required: "Required"
    },
    email: {
        type: String,
        required: "Required"
    },
    password: {
        type: String,
        required: "Required",
    },
    imageUrl: {
        type: String,
        required: "Required",

    },
    theme: {
        type: String
    }

});

mongoose.model("User", userSchema);