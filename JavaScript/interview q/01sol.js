let students=["shubh, anjali", "shivani", "shubham", "annapurna", "ravindranathan", "shivesh", "kaif", "emmanuel"];

let houses=[];

for(const student of students){
    if(student.length < 6){
        houses.push("Gryfindor");
    }
    else if(student.length > 8){
        houses.push("hufflepuff");
    }
    else if(student.length > 12){
        houses.push("ravenclaw");
    }
    else{
        houses.push("slytherin")
    }
}

console.log(houses);