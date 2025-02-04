let input=document.getElementById("input");
let bin=document.getElementById("binary");
let oct=document.getElementById("octal");

let number;
function display(element){
    input.value += element;

}

function clearDisplay(){
    input.value= "";
    input.style.color="white";
}

function calculate(){
    input.value=eval(input.value);
    input.style.color="lightseagreen";
    }

function binary(){
    number = parseInt(input.value);
    bin=number.toString(2);
    input.value=bin;
    input.style.color="lightgreen";
}
function octal(){
    number = parseInt(input.value);
    oct=number.toString(8);
    input.value=oct;
    input.style.color="lightgreen";
}