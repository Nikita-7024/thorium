const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})



// Q 1-------------------------
router.get('/movies', function(req,res){
    res.send('["Fukrey","Dabang","Uri","Pushpa","Spider-man"]')
});



// Q 2---and Q 3------------------------------
router.get('/movies/:movieId', function(req,res){
    mov = ["Fukrey","Dabang","Uri","Pushpa","Spider-man"]
    let value = req.params.movieId
    if(value>mov.length-1){
        res.send("does not exist")
    }else {
        res.send(mov[value])
    }
});


// Q 4-----------------------------------
router.get('/moviz', function(req,res){
    let moviz = ([ 
        {id:1 ,name:'The shining'},
        {id:2, name:'Incendies'},
        {id:3, name:'Rang de basanti'},
        {id:4, name:'Finding demo'}
    ])
    res.send(moviz)
});


// Q 5----------------------------------
router.get('/film/:filmId', function(req,res){
    let film = [ 
        {id:1 ,name:'The shining'},
        {id:2, name:'Incendies'},
        {id:3, name:'Rang de basanti'},
        {id:4, name:'Finding demo'}
    ]

    let value2 = req.params.filmId
    let found = false
    for(i=0; i<film.length;i++){
        if(film[i].id == value2){
            found = true
            res.send(film[i])
            break;
        }
    }
    if(found == false){
        res.send("no film exist")
    }
});


module.exports = router;