import fs from "fs";
//console.log(fs)
console.log("starting...")
//fs.writeFileSync("shoaib.txt", "he is a clever boy")

fs.writeFile("shoaib2.txt", "this is a asynchronous approached file writing", ()=>{
    console.log("done")
    fs.readFile("shoaib.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("shoaib.txt", " he is shoaib", (e, d)=>{
console.log(d)
})
console.log("ending...")

/*writefilesync works in block code manner 
where youre code works synchronously onr step at time*/