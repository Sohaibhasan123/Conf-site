const mongoose = require('mongoose');


const AddReviewer = mongoose.Schema({
    email : String

},{
    timestamps: true
})
const Reviewer = mongoose.model('Reviewer', AddReviewer);

module.exports = Reviewer;