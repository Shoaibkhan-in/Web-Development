console.log("this is web designing course");

setTimeout(() => {
    console.log("this is going to print in the last");

}, 0);

console.log("the end");

const fn=()=>{
    console.log("nothing")
}
const callback=(arg, fn)=>{
    console.log(arg);
    fn();
}

const loadScript=(src, callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("shoaib", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)