const express = require("express")
const app = express()
const port =3000

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.send('hello world')
})

app.get('/about', (req, res) =>{
    res.send('hello about')
})

app.get('/contact', (req, res) =>{
    res.send('hello contact')
})

app.get('/blog', (req, res) =>{
    res.send('hello blog')
})

app.get('/blog/:slug/:second', (req, res) =>{
    //logic to fetch {slug} form db
    console.log(req.params)// it will output {slug :`intro to Shoaib's blog}
    console.log(req.query)// it will output query: { mode: 'dark', region: 'in' }
    //for url http://127.0.0.1:3000/blog/intro-to-shoaibs-blog/blog1?mode=dark&region=in
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

/*app.get('/blog/intro-to-js', (req, res) =>{
    //logic to fetch intro to js form db
    res.send('hello Javascript')
})

app.get('/blog/intro-to-python', (req, res) =>{
    //logic to fetch intro to js form db
    res.send('hello Python')
})*/

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})