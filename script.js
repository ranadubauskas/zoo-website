console.log("script running!");

const button1 = document.querySelector("#button1");
const button3=document.querySelector("#button3");
const button2=document.querySelector("#button2");
const status2=document.querySelector("#status2");

/*
function doThisForButton1(e){
  console.log("button 1 was pressed");
  console.log(event);
}
*/
button1.addEventListener("click", event =>{
  console.log("arrow function");
  alert("mehehehe")
});



button2.addEventListener("click", event =>{
  console.log("button 2 was pressed");
  status2.innerHTML="Thanks for petting bunny";
});
let carrots=2
const status3=document.querySelector("#status3");
button3.addEventListener("click", event=> {
  console.log("button 3 was pressed");
  if(carrots>15){
    status3.innerHTML="Coco is full for today";
    button3.parentNode.removeChild(button3);
    alert("Coco is full for today");
  }
  else {
  carrots++;
  status3.innerHTML="Coco has had " + carrots + " carrots today";
  }
});

const button4=document.querySelector("#button4");
const zoo=document.querySelector(".container");
button4.addEventListener("click", event=> {
  alert("Are you sure?")
  zoo.innerHTML= `<h1 class="title"> Due to some dangerous rulebreaking, the petting zoo is temporarily closed </h1>`;
});



