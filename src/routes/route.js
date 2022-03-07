const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const ProductController= require("../controllers/ProductController")
const documentController= require("../controllers/documentController")
const headerMiddleware= require("../middleware/headerMiddleware")

router.post("/createUser",headerMiddleware.contentHeader ,userController.createUser )

router.post("/createProduct", ProductController.createProduct)

router.post("/createDocument",headerMiddleware.contentHeader , documentController.createDocument )


// router.get("/getDocumentData", documentController.getDocumentData)



module.exports = router;