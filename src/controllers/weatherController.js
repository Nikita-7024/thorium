const axios = require('axios')

let getWeather = async function(req,res){
    try{
        let city = req.query.q
        let key = req.query.appid
        if(city && key){
        let options = {
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true, msg: result.data})
    }else{
        res.status(400).send({status: false, msg: "Please provide valid city or key"})
    }

    }catch (error){
        res.status(500).send({error: error.message})
    }
}

let tempOfLondon = async function(req,res){
    try{
        let city = "London"
        let key = req.query.appid
        if(key){
        let options = {
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true, msg: result.data.main.temp})
    }else{
        res.status(400).send({status: false, msg: "Please provide valid  key"})
    }

    }catch (error){
        res.status(500).send({error: error.message})
    }
}


let tempOfCities = async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let key = req.query.appid
        let cityArray= [ ]
        for(let i=0; i<cities.length; i++){
            let obj= { cities: cities[i] }
            let options = {
                method: "GET",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${key}`
            }
            let result = await axios(options)
            console.log(result.data.main.temp)

            obj.temp = result.data.main.temp
            cityArray.push(obj)
        }
        let sorted = cityArray.sort( function(a,b) { return a.temp - b.temp } )
        console.log(sorted)
        res.status(200).send({status: true, data:sorted})
    } catch(err){
        console.log(err)
        res.status(500).send({status: false, msg: "servor error"})

    }
        
}

module.exports.getWeather = getWeather
module.exports.tempOfLondon = tempOfLondon
module.exports.tempOfCities = tempOfCities