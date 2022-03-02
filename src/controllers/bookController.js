const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('Author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('No author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('Publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('No publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}


module.exports.createBook= createBook
module.exports.getBooks= getBooks
