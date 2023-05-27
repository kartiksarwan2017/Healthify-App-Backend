const mongoose = require('mongoose');

const yogaSchema = new mongoose.Schema({
    posename: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    videoId: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    relaxationTime: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required:true
    }

},{
    timestamps: true
});


const Yoga  = mongoose.model("yoga", yogaSchema);
module.exports = Yoga;