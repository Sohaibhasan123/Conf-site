const mongoose = require('mongoose');


const AuthorSubmit = mongoose.Schema({
    title : String,
    abstract : String,
    fileURL : String,
    paperDomain : String,
    keywords : String,
    author : [{
      firstName: String,
      lastName: String,
      email: String,
      country: String,
      address: String,
      affiliation: String,
    }]


},{
    timestamps: true
})
const authorSubmit = mongoose.model('authorSubmit', AuthorSubmit);

module.exports = authorSubmit;