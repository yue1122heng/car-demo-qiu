const mongoose = require('mongoose');

const classesModel = mongoose.model('classes', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    subs: {
        type: Array,
        required: true
    },
    tips: {
        type: Array,
        required: true
    },
    award: {
        type: Number,
        required: true
    },
    gift: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createTime: {
        type: Date,
        default: new Date()
    }
}));

module.exports = classesModel;