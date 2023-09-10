const { init } = require("express/lib/application");
const boxs=document.querySelectorAll('.btn');
const statusTxt=document.querySelector('.result');
const btnReset=document.querySelector('#reset');
let x="<img src='images/x.png'>";
let o="<img src='images/o.png'>";

const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let options=["","","","","","","","",""];
let currentPlayer=x;
let running=flase;
init();

function init(){
    boxs.forEach(box=>box.addEventListener('click',boxclick));
    btnReset.addEventListener('click',restartGame);
    statusTxt.textContent='${player} Your Turn';
    running=true;
}
function boxclick(){
    const index=this.dataset.index;
    if(options[index]!=""|| !running){
        return;
    }
    updateBox(this,index);
    checkWinner();
}
function updateBox(box,index){
    options[index]=player;
    box.innerHTML=currentPlayer;
}
function changeplayer(){
    player=(player=='X') ? "O" : "X";
    statusTxt.textContent='${player} Your Turn';
}
function checkWinner(){
    let isWon=flase;
    for(let i=0;i<win.length;i++){
        const condition=win[i]; //[0,1,2]
        const box1=options[condition[0]]; //x
        const box2=options[condition[1]]; //''
        const box3=options[condition[2]]; //''
        if(box1==""||box2==""||box3==""){
            continue;
        }
        if(box1==box2 && box2==box3){
            isWon=true;
            boxs[condition[0]].classList.add('win');
            boxs[condition[1]].classList.add('win');
            boxs[condition[2]].classList.add('win');
        }
    }
    if(isWon){
        statusTxt.textContent='${player} won';
        running=flase;
    }else if(!options.includes("")){
        statusTxt.textContent='Game Draw!';
        running=flase;    
    }else{
        changeplayer();
    }
}

function restartGame(){
    options=["","","","","","","","",""];
    currentPlayer=x;
    player="X";
    running=true;
    statusTxt.textContent='${player} Your Turn';

    boxs.forEach(box=>{
        box.innerHTML="";
        box.classList.remove('win');
    });
}