let button=document.getElementById("btn");

button.addEventListener("click", ()=>{
document.querySelector(".box").innerHTML="<b>hey youre clikced <b>";
})
button.addEventListener("contextmenu", ()=>{
    alert("this is context listener which is right clicked in mouse");
})
document.addEventListener("keydown", (e)=>{
    alert("key is pressed "+e.key)
    })