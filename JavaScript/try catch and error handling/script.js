let a =prompt("enter first number");
let b=prompt("enter second number");
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("sorry input is not a number");
}
let sum=parseInt(a)+parseInt(b);
//alert("The sum is "+sum);
console.log('The sum is', sum);
function main(){

    let x=1;
    try {
        console.log('The sum is', sum*x);
        return true;
} catch (error) {
    console.log("theres a error exist in code")
    return false
}
finally{
    console.log("files are beings closed and db connection is being closed")
}
}
let c=main();
console.log(c);