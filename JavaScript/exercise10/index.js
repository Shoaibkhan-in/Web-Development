let a=Math.random()*100;
let b=Math.random()*100;
let c=Math.random()*100;

function adj(a){
    if(a<=33){
        return "Crazy";
    }
    else if(a>=33 && a<=66){
        return "Amazing";
    }
    else{
        return "Fire";
    }
}
function sname(b){
    if(b<=33){
        return "Engine";
    }
    else if(b>=33 && b<=66){
        return "Foods";
    }
    else{
        return "Garments";
    }
}
function anotherw(c){
    if(c<=33){
        return "Bros";
    }
    else if(c>=33 && c<=66){
        return "Limited";
    }
    else{
        return "Hub";
    }
}

console.log(adj(a));
console.log(sname(b));
console.log(anotherw(c));
