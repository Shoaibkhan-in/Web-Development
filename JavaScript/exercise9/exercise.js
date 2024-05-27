var a=math.random()*100;
var b=prompt("enter a number");
var c=prompt("enter another number");
var operation=prompt("enter the operation you want to perform");

if(a<=10){
switch(operation){
    case '+': document.write("addition of two number is ", (a-b));
    break;
    case '*': document.write("multiplication of two number is ", (a-b));
    break;
    case '-': document.write("substraction of two number is ", (a/b));
    break;
    case '/': document.write("division of two number is ", (a**b));
    break;
}
}
else{
    switch(operation){
    case '+': document.write("addition of two number is ", (a+b));
    break;
    case '*': document.write("multiplication of two number is ", (a*b));
    break;
    case '-': document.write("substraction of two number is ", (a-b));
    break;
    case '/': document.write("division of two number is ", (a/b));
    break;
}
}