const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}


const getAuthorsData= async function (req, res) {
    let listOfAuthors = await AuthorModel.find()
    res.send({data: listOfAuthors})
}


module.exports.getAuthorsData= getAuthorsData
module.exports.createAuthor= createAuthor