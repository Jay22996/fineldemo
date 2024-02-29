var mongoose = require('mongoose')

var User_schema = new mongoose.Schema({
    Name: {
        type: String
    },
    Mobile: {
        type: Number
    },
    Reason: {
        type: String
    },
    End_Date:{
        type: String,
    },
    type:{
        type: String,
        default:null
    }

})

module.exports = mongoose.model('User_schema',User_schema)