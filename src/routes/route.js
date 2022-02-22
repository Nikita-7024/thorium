const obj = require('../logger.js')
const obj1 = require('../logger/logger.js')
const obj2 = require('../Util/helper.js')
const obj3 = require('../validator/formatter.js')
const express = require('express');
const router = express.Router();
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    obj.log('thorium')
    obj1.welcome('welcome')
    obj2.helper('helper')
    obj3.trim()
    obj3.change()

    res.send('My first ever api!')
});


module.exports = router;





//Q 4- Lodash Function ------------------------------
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let subArrays = lodash.chunk(months, 3)
console.log('Chunks of months ', subArrays)


let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
let lastArrays = lodash.tail(oddNumbers)
console.log('Last 9 odd numbers ',lastArrays)


let arr1 = [1,2,3]
let arr2 = [2,3,3,4]
let arr3 = [4,5,6,6]
let arr4 = [5,6,7]
let arr5 = [7,8,9,8]
console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))


let object1 = ['horror', 'The Shining']
let object2 = ['drama', 'Titanic']
let object3 = ['thriller', 'Shutter island']
let object4 = ['fantasy','Pans Labyrinth']
let movieObject = lodash.fromPairs([object1,object2,object3,object4])
console.log('Movies Object: ', movieObject)

