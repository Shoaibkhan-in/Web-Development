/*function factorial(x){
    if(x===0){
        return 1;
    }
    else{
        return x*(factorial(x-1));
    }

}
let x=5;
console.log(`The factorial of ${x} is `+ factorial(x));
*/

function factorial(x){
    let fact=1;
    if(x===0){
        return 0;
    }
    for (let i=2; i<=x; i++){
        fact=fact*i;
    }
    return fact;
}
let x=5;
console.log(`The factorial of ${x} is `+ factorial(x))