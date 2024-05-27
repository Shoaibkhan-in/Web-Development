async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        }, 1000)
    })
}

function sum(a, b,c){
    return a+b+c
}
//IIFE immediately invoke function expression 
(async function main(){
    /*let a=await sleep()
    let b=await sleep()
    console.log('this is function which run is second', a);
    console.log('this is function which run is second', b);
    */
    let [x,y, ...rest]=[1,5,7,8,9,10];
    console.log(x,y)
    console.log(rest)

    let obj={
        a:1,
        b:2, 
        c:3
    }
    let {a,b}=obj;
    console.log(a,b)
    let arr=[1,4,6];
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));//both are same 
})()
/*
hoisting concept is concept where 
the variable 

console.log(a);

let a =10
this shows a error where as 

if you give var a =10 
then it will print undefined so the a has gone 
to the top for declaration 
this happens because of hosting 
where the value does not get added in up side of 
declaration 
hositing only happens in var not in let and const
*/