const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('this is get request')
    console.log('this is get request')
}).post('/', (req, res) => {
    console.log('this is post request')
    res.send('this is post request')
}).put('/', (req, res) => {
    console.log('this is put request')
    res.send('this is a put request')
}).delete('/', (req, res) => {
    console.log('this is delete request')
    res.send('this is a delete request')
})

app.get('/index', (req, res) => {
    res.sendFile('templates/index.html', {root:__dirname})
    console.log("this is index ")
})

app.get('/api', (req, res) => {
    res.json({a:1, b:2, c:3, d:4, name:["shoaib" , "Khan"] })
})

/*
app.get('/', (req, res) => {
    res.send('this is get request')
    console.log('this is get request')
})

app.post('/', (req, res) => {
    console.log('this is post request')
    res.send('this is post request')
})

app.put('/', (req, res) => {
    console.log('this is put request')
    res.send('this is a put request')
})

app.delete('/', (req, res) => {
    console.log('this is delete request')
    res.send('this is a delete request')
})
*/

// there are multiple types of request such as put get delete 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})