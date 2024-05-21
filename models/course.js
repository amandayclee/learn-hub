const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Application = require('./application');

const courseSchema = new Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    duration: { type: Number, required: true },
    skillLevel: {
        type: Number,
        min: 1,
        max: 10,
        default: 10
    },
    // user: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
})

module.exports = mongoose.model('Course', courseSchema);