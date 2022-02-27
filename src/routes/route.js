const express = require('express');
const router = express.Router();
const bookSchema= require("../models/bookModel")
const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post('/createBook', async function(req,res){

    let value = req.body
    let savedValue = await bookSchema.create(value)

    res.send({ msg: savedValue})
})


router.get('/getBookData', async function(req,res){
    let allBook = await bookSchema.find()
    res.send({msg : allBook})
})

// router.post("/createBook", bookController.createBook  )

// router.get("/getBookData", bookController.getBookData)

module.exports = router;