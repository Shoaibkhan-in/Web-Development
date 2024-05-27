console.log("this is string tutorial");
let a= "shoAib";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
//console.log(a[6]); this will show undefined

console.log(a.length);

let aname="pathan";
console.log("my name is "+a+" and my last name is "+aname);
console.log(`my name is ${a} and my last name ${aname}`);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.slice(1,4));
/* in this slice method the string will give the
characters in string from 1 to 3 index removing 4 also*/

var b="shoaib khan";
console.log(b.replace("khan", "Pathan"));
console.log(a.concat(aname, "Khan"));
