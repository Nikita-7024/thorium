const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName : String,
    authorName : String ,
    Category : {type: String, enum : ["Thermo", "Mechanics","Production", "Design"]},
    year : Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);





// mongodb+srv://ranjan:e91pDMx03Sx9wB2V@cluster0.u4idw.mongodb.net/nikita-7024-DB