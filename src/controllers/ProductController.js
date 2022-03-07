const { count } = require("console")
const ProductModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data= req.body

    let Product= await ProductModel.create(data)
    res.send({msg: Product})
}





module.exports.createProduct= createProduct
// module.exports.getBooksData= getBooksData
