/*let obj={
    a:1,
    b:"shoaib"
}

console.log(obj);

let animal={
    "eats":true
}

let rabbit={
    "jumps":true
}

rabbit.__proto__ = animal;
console.log(rabbit);
console.log(rabbit.eats);
*/


class animal{
    constructor(name){
        this.name=name;
        console.log("object is created");
    }

    eats(){
        console.log('eating..');
    }
    jumps(){
        console.log('Jumping...');
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        this.name=name
        console.log("object is created he is the lion")
    }

    //method overriding 
    eats(){
        super.eats();// to call super class method function
        console.log('i am eating and roaring');
        
    }
}

let a=new animal("fishy")
console.log(a);
a.eats()
console.log(a.name);

let l=new lion("shera");

console.log(l)

l.eats()

console.log(l instanceof animal)