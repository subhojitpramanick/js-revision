//Function Can be defined Majorly Two ways 

export default function doSomething(a,b){
    return a+b;
}
/* 
    export is used for using this funtion in any other files other than this file
    Suppose wee make a file called Pay.js, that Pay.js have a funtion Pay() that export keyword helps to use that
    funtion in any other file without using Script tag in html file for import .
*/
//Arrow Funtion
export const doSomething2=(a,b)=>{
    return a+b;
}
//Ternery Op

let age=10;
let voteRight=(age>=18)? true:false;
console.log(voteRight);

//Objects[also can be interpreted as Map 0r Dict]
let obj={
    name:"Cherki",
    age:18,
    method:()=>{
        console.log(`My name is ${obj.name} and age is :${obj.age}`)
    }
}
obj.method()
//Spread Op
let names=["Pedro","Jessica","James"]// 
const jnames=[...names,"Jhon"]


names=names.map((value)=>{
    return value+" Person"
})
names.forEach((value)=>{
    console.log(value);
})

// Async + Await + Fetch
//Creating a promise
const event=new Promise((resolve,reject)=>{
    let name="Jhon"
    if(name==="Jho"){
        resolve(name)
    }else{
        reject("Name Not Match")
    }
})

event.then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err)
})

