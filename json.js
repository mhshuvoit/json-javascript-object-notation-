var fs = require ('fs')
var faker = require('faker');

var peoples = []

for(var i =0; i<10;i++){
    var people = {}
    
people.name= faker.name.findName()
people.email = faker.internet.email()
people.adress = {
    city:faker.address.city(),
    country:faker.address.country(),
    lat:faker.address.latitude(),
    long:faker.address.longitude()
}

peoples.push(people)
}

// //If I want to see js object in terminal
// console.log(peoples)

// //If I want to see json in terminal
// console.log(JSON.stringify(peoples))

// //If I want to convert js object to json. It will be create in demo.json
// fs.writeFile('demo.json', JSON.stringify(peoples), function(err, data){
//     console.log('File created successfully...')
// })

// //If I want to convert json to js object
var data= fs.readFileSync('demo.json').toString()
var people = JSON.parse(data)
console.log(people)

// If I want to see just name and email from demo.json
people.forEach(function(elem){
    console.log(elem.name, elem.email)
})
