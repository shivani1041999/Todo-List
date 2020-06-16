
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: 'No deadline'
        
    }
});

const Todotask = mongoose.model('Todotask', todoSchema);

module.exports = Todotask;
