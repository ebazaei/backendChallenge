const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postfeedSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 60
    },
    emailform: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 150
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    }

}, {timestamps: true});

const PostFeed = mongoose.model('postfeed', postfeedSchema);




module.exports = PostFeed;