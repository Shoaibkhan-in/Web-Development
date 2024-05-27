console.log("hello world!");
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
let cont=document.body.childNodes[1];
console.log(cont)
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.firstElementChild);
console.log(cont.lastElementChild.style.color="red");
console.log(cont.lastElementChild.style.backgroundColor="green");
console.log(cont.lastElementChild.parentElement);
console.log(document.body.firstElementChild.children);
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.children)
console.log(document.body.children[1])
console.log(document.body.children[1].rows)

