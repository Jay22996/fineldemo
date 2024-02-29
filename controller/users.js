
var User_schema = require('../model/user');

exports.add = async (req,res) => {
    
    var data = await User_schema.create(req.body)

    res.status(200).json({
        status :"add successfully",
        data
    })
}

exports.find = async (req,res) => {
    
    var data = await User_schema.find()

    res.status(200).json({
        // status :"views data",
        data
    })
}

exports.accept = async (req,res) => {
    
    var id = req.params.id;
    console.log(id);
    
    var positon = req.body.type = "Accept"
    console.log(positon);


    var data = await User_schema.findByIdAndUpdate(id,req.body)

    res.status(200).json({
        status :"Accept successfully",
        data
    })
}

exports.decline = async (req,res) => {
    
    var id = req.params.id;
    var positon = req.body.type = "decline"

    var data = await User_schema.findByIdAndUpdate(id,req.body)

    res.status(200).json({
        status :"decline successfully",
        data
    })
}
