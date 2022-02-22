function trim(){
    let name = '     nikita singh'
    let result = name.trim()
    console.log(result)
}


function change(){
    let string = 'nIkiTaSinGH'
    let lowercase = string.toLowerCase()
    let uppercase = string.toUpperCase()
    console.log(lowercase, uppercase)
}
module.exports.trim = trim
module.exports.change = change