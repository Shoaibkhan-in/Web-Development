let arr=[1,3,5,7,11];
/*let Newarr=[];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    Newarr.push(element*element);
}
console.log(Newarr);
*/

let newArr = arr.map((e, index, arr)=>{
    return e**2;
})
console.log(newArr);
const greaterThanSeven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterThanSeven))

let arr2=[1,2,3,4,5,6]

const add=(a,b)=>{
    return a+b;
}

console.log(arr2.reduce(add));

console.log(Array.from("shoaib"));