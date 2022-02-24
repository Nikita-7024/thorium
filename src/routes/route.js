const express = require('express');
const router = express.Router();


let players = [];

router.post('/players', function(req,res){
    // let players = []
    let player = req.body
    let playerName = player.name
    for(let i=0; i<players.length;i++){
        if(players[i].name == playerName){
            res.send('Players already exist')
        }
    }
    players.push(player)
    res.send(players)
});


module.exports = router;







