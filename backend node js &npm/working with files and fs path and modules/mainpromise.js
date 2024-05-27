import fs from "fs/promises"

let a = await fs.readFile("shoaib.txt")

let b = await fs.appendFile("shoaib2.txt", "\n writing it promise")
console.log(b)

console.log(a.toString())