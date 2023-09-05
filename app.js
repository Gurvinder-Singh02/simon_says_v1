let btnArr = ["yellow","red","green","blue"];

let btn = document.querySelectorAll(".btn");

let pc=[];
let user = [];

let h3 = document.querySelector("h3")

let started = false;
let level = 0;

let lvl = document.querySelector(".level");

document.addEventListener("keypress",()=>{
    if(!started){
        console.log("key wa spressed")
        started = true
        h3.innerText = " Game started ";
        levelup();
    }
})

function levelup(){
    level++;
    lvl.innerText = level;
    let ran = Math.floor(Math.random()*4);
    pc.push(btn[ran].id)
    setTimeout(()=>{
        flash(btn[ran])
        console.log(pc);
    },2000)
}

function flash(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash")
    },1000)
}

for(b of btn){
    b.addEventListener("click",function(){
        user.push(this.id)
        console.log(user);
        flash(this);
        if( started = true && user[user.length]==pc[pc.length]){
            levelup();
        }
    })
}