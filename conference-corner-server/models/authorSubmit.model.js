const mongoose = require('mongoose');


const AuthorSubmit = mongoose.Schema({
    title : String,
    description : String,
    fileURL : String

},{
    timestamps: true
})
const authorSubmit = mongoose.model('authorSubmit', AuthorSubmit);

module.exports = authorSubmit;