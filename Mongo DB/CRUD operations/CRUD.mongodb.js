
// creating and connecting to data base 
use("CRUDDB")

console.log(db)
//creating collection 
db.createCollection("Crud1db")
// inserting into the data base collection 
/*
db.Crud1db.insertOne({
    name: "Shoaib Web Dev Journey",
    start: "2 months",
    language: "Fullstack"
})

// in insert many you can pass array of json elements 

// for example 

db.Crud1db.insertMany([
    {
        name: "Shoaib Web Dev Journey",
        start: "2 months ",
        language: "Fullstack"
    },
    {
        name: "Shoaib programing journey",
        start: "3 Years",
        StudyOf: " Computer science"
    },

])
*/
/*
// to find specific record with specific details 
let a = db.Crud1db.find({language:"Fullstack"})

console.log(a)
// counting the number of record with language fullstack 
console.log(a.count())
// giving all record with language given 
console.log(a.toArray())

*/

/*
// UPDATE 
// updating one record 
db.Crud1db.updateOne({language:" Fullstack"}, {$set:{language:"Fullstack"}})

// updating many / all records associative with key
db.Crud1db.updateMany({language:" Fullstack"}, {$set:{language:"Fullstack"}})
*/
// DELETE

// deleting one record from database with associated key

db.Crud1db.deleteOne({language:"Fullstack"})

// deleting all records associative with key in database 
db.Crud1db.deleteMany({language:"Fullstack"})