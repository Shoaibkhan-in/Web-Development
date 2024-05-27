console.log("this is js page");
var a=5;
var b=6;
var c="shoaib";
document.writeln(a+b);
document.writeln(typeof a , typeof b , typeof c);

//var is globally scoped and let and cons is block scoped elements
{
    let a=60;
    document.writeln(a);
    //let a is box scoped so its exist only for 
    //this container
}

document.write(a);
//where as here a is global scoped so it will exists on whole page

//primitive and object data types exists
/*
primitive data type as follows as 
null number string symbol undefined boolean
bigint
*/

let x="shoaib";
let y=22;
let z= 3.14;
const p = true;
let q=undefined;
let r=null;

document.writeln(x,y,z,p,q,r);
//document.writeln(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);
document.writeln(typeof x)
document.writeln(typeof y)
document.writeln(typeof z)
document.writeln(typeof p)
document.writeln(typeof q)
document.writeln(typeof r)

/*
objects in java scripts
*/

let o={
    name:"shoaib",
    "job no":56000
}
console.log(o)
document.writeln("this is "+o.name);
o.per=88.70;
document.writeln("this is "+o.per);