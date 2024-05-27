console.log('this is promises');

let prom1=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No randome number is supporting you");
    }
    else{
    setTimeout(()=>{
        console.log("yes i am done");
        resolve("shoaib");
    }, 3000)
}
})

let prom2=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No randome number is supporting you");
    }
    else{
    setTimeout(()=>{
        console.log("yes i am done 2");
        resolve("Shoaib 2");
    }, 3000)
}
})


/*prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
*/

let p3=Promise.allSettled([prom1, prom2]);

p3.then((a)=>{
console.log(a)
}).catch((err)=>{
    console.log(err);
})
