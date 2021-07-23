const mongoose = require("mongoose");

const numberSchema = mongoose.Schema({
    number1 : {
        type: Number,
        required: true,
    },

    number2:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Number", numberSchema);