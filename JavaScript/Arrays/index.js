let arr=[1,2,3, 4,5,6,7];
console.log(arr);
console.log(arr.length);

console.log(typeof arr);//object
console.log(typeof arr.toString()); //returns string
console.log(arr.join(" and "))
console.log(arr.pop());
console.log(arr.push(8));
console.log(arr.push("shoaib"));
console.log(arr.shift());
console.log(arr.unshift("Pathan"));
delete arr[0];
console.log(arr);

let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];
console.log(a1.concat(a3,a2).sort());

arr.splice(1,2,77);
arr.reverse();
console.log(arr);

