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
    const index=this.dataset.index
}
