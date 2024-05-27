async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000)
    })
}

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    return data;
}
async function getData() {
    let x= await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body:JSON.stringify({
            title:`foo`, 
            body:`bar`, 
            userId:1,
        }),
        headers:{
            'Content-Type':'application/json; charset=UTF-8',
        },
    })
        let data= await x.json();
        return data;
}


async function main() {
    console.log("loading modules");
    
    console.log("do something...");
    
    console.log('Load data');
    let data = await getData();
    /*data.then((v)=>{
        
        console.log(data);
        
        console.log('Process Data');
        
        console.log('task 2');
        
    })*/
    console.log(data);
    
    console.log('Process Data');
    
    console.log('task 2');

}

main();

/*Example POST method implementation:
async function postData(url = "", data = {}) {
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(data), 
    });
    return response.json(); 
}
postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data);
});
*/