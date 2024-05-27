console.log("shoaib");

let boxes=document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor="red";
var i=0;
document.getElementById("red").style.backgroundColor="green";
document.querySelector(".box").style.backgroundColor="purple";
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="green";
});

console.log(e=document.getElementsByTagName("div"));
console.log(e[4].matches("#red"));

console.log(e[3].closest(".container"));
console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector("body").contains(document.querySelector(".container")));