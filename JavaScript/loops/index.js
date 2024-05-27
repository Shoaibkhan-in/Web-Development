console.log("tutorial on loops");

let a =100;
for (let i=0; i<a; i++){
    console.log(i);
}

//to print object

let obj={
    name:"shoaib", 
    role:"software engineer",
    salary:4000000
}
for (const key in obj) {
        const element = obj[key];
        console.log(key+" "+element)
    }
    for (const c of "shoaib") {
        console.log(c);
    }
