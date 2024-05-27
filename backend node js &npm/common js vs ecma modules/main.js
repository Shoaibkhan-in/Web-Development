//const http = require('node:http');
/*import http from "http"
import {a, b} from "./mymodule.js"
console.log(a)
console.log(b)*/

/*import shoaib from "./mymodule.js"
console.log(shoaib) 
*/

// in require function works in background as 
/*function (exports, require, module, __filename, __dirname){
    module code actually lives here 
}*/
const a = require("./mymodule2.js")
console.log(a, __dirname, __filename)