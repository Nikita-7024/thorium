const userModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedUser= await userModel.create(data)
    res.send({msg: savedUser})
}


module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData