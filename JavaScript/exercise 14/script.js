let script=`<div class='box'>Initializing Hacking <div class="blinking"></div></div>
        <div class='box'>Reading You're Files</div>
        <div class='box'>Password Files Detected</div>
        <div class='box'>Sending all Passwords and Personal Files to Server</div>
        <div class='box'>Cleaning up</div>`;

async function waiting(html){
    rand=Math.ceil(Math.random()*7)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html);
        }, rand*1000)
    })
}

/*document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html1;
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html2;
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html3;
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html4;
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html5;
*/

async function main(){
    var html1="<div class='box'>Initializing Hacking</div>"
var html2="<div class='box'>Reading You're Files</div>"
var html3="<div class='box'>Password Files Detected</div>"
var html4="<div class='box'>Sending all Passwords and Personal Files to Server</div>"
var html5="<div class='box'>Cleaning up</div>";
    await waiting(html1)
    await waiting(html2)
    await waiting(html3)
    await waiting(html4)
    await waiting(html5)
}

main()