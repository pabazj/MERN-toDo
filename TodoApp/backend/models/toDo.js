const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    activeState: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});
module.exports = mongoose.model('ToDo', toDoSchema);