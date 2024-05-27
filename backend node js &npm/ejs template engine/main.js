const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs" )

app.get('/', (req, res) => {
    let siteName="Air Jordan"
    let searchText="Search Now"
    let arr=["hey", 55, 24,31]
    res.render("index", {siteName:siteName, searchText:searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle="Air Jordan when ?"
    let blogContent="It's one of the best shoe brand "
    let arr=["one", "two", "three", "four", "five"]
    res.render("blogpost", {blogTitle:blogTitle, blogContent:blogContent, arr})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})