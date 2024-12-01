
let increment = document.querySelector(".btn1");
let reset = document.querySelector(".btn2");
let decrement = document.querySelector(".btn3");

let add = document.querySelector(".number");
let sub = 0;

increment.addEventListener("click",function(){
    sub++;
    add.innerHTML = sub;
    
    if(sub > 0) {
        document.querySelector(".number").style.color = "rgb(0, 50, 0)";
    }
    else if(sub < 0) {
        document.querySelector(".number").style.color = "rgb(170, 0, 0)";
    }
    else {
        document.querySelector(".number").style.color = "white";
    }
});

reset.addEventListener("click",function(){
    sub=0;
    add.innerHTML = sub;
    document.querySelector(".number").style.color = "white";
});

decrement.addEventListener("click",function(){
    sub--;
    add.innerHTML = sub;
    
    if(sub > 0) {
        document.querySelector(".number").style.color = "rgb(0, 50, 0)";
    }
    else if(sub < 0) {
        document.querySelector(".number").style.color = "rgb(170, 0, 0)";
    }
    else {
        document.querySelector(".number").style.color = "white";
    }
    
});