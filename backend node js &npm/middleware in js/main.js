const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

//this is in-built middleware
app.use(express.static("public"))

// this is error - handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//third party middleware needs to be downloaded through npm
// install cookie parser const express = require('express')
/*const app = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
*/


//this is the router level middleware
app.use('/blog', blog)
// this is application level middleware
app.use((req, res, next) => {
    console.log(req.headers)
    req.Shoaib = "hello this is shoaib"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    next()
})

//middleware 1
app.use((req, res, next) => {
    console.log("m1");
    req.Shoaib = "hello this is modified shoaib"
    //resp.send("hacked by middleware 1")
    //since the response has been sent 
    //theres no use of next function 
    //next()
    next()
})

// if you do not provide next function in middle ware 
// the response get stuck and web do not get started

//middleware 2
app.use((req, res, next) => {
    console.log("m2");
    next()
})

app.get('/shoaib', (req, res) => {
    res.send('Hello World! ' + req.Shoaib)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})