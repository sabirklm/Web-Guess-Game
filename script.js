'use strict'

let num=Math.floor(Math.random()*5+1);
let currentScore=20;
let maxScore=0;
let isMatched=false;
document.querySelector("#exact-num").textContent="BackGround Generated Number ";
document.querySelector("#current-score").textContent="Current Score:- "+currentScore;

document.querySelector("#check-button").addEventListener("click",function(){
    console.log("Hi form add event listener");
    let inputNum=document.querySelector("#input-num").value;
    //if(inputNum==null)
        if(inputNum<num){
         document.querySelector("#status-heading").textContent="Too Low!!";
         currentScore--;
        }else if(inputNum>num){
        document.querySelector("#status-heading").textContent="Too High!!:)";
        currentScore--;
        document.querySelector("#current-score").textContent="Current Score:- "+currentScore;
        }else{
        document.querySelector("#status-heading").textContent="Correct 🎉"
            if(currentScore>maxScore){
                isMatched=true;
                maxScore=currentScore;
                document.querySelector("#max-score").textContent="Maximum Score:- "+maxScore;
                /**/
                /* */
                document.body.style.backgroundColor="green";
            }
        }
});

document.querySelector("#play-again").addEventListener("click",function(){
    currentScore=20;
    document.querySelector("#current-score").textContent="Current Score:- "+currentScore;
    document.body.style.backgroundColor="yellow";
    num=Math.trunc(Math.random()*5)+1;
    document.querySelector("#exact-num").textContent="BackGround Generated Number "+num;
});

/*
let p= new Promise(function(resolve,reject){
        setTimeout(()=>{
            reject("Form reject");
            resolve();
        },1000);
    });

p.then(()=>{
    console.log(num+"from then");
}).catch(function(error){
    console.log("From Catch"+error);
});
*/

/*

user.userName="Kalam";
console.log(user.userName);
//let assume this students array object comming from the server 
const students=[
    {name:"Sabir",subject:"JavaScript"},
    {name:"Amit",subject:"Machine Learning"}
]
function enrollStudent(student,callGetStudents){
setTimeout(()=>{
students.push(student);
console.log(student.name +" is enrolled");
callGetStudents();
},3000);
};

function getStudent(){
    setTimeout(function(){
        let str="";
        students.forEach(function(stdElement){
            str+=`<li> ${stdElement.name} -${stdElement.subject} </li>`;
            console.log(stdElement.name+" is fatched");
        });
        document.getElementById("students").innerHTML=str;
    },1000);
};
let studentList=[{name:"Sourav",subject:"Electronic"},
{name:"Pradipta",subject:"All"},
{name:"Tanmoy",subject:"PI"}];
for(let newStudent in studentList){
enrollStudent(studentList[newStudent],getStudent);
}

fetch("https://picsum.photos/200/300?random="+Math.trunc(Math.random()*10)).then((response)=>{
    console.log(response);
    return response.blob();
    
})
.then((blob)=>{
    console.log(blob);
    document.getElementById("image-to-display").src=URL.createObjectURL(blob);
})
.catch((error)=>{
    console.error(error);
    console.log("Error");
});*/
document.documentElement.addEventListener("click",function(event){
    event.target.style.backgroundColor="#D3D3D3";
    setTimeout(function(){
        console.log("After 3 seconds");
        event.target.style.backgroundColor="#C0C0C0";
    },3000);
});