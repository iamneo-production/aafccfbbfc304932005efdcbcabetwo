const boxs=document.querySelectorAll('.btn');
const statusTxt=document.querySelector('.result');
const btnReset=document.querySelector('#reset');
let x="<img src='images/x.png'>";
let o="<img src='images/o.png'>";

const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
