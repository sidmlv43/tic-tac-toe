'use strict';
const gameBoard = document.querySelector("#gameBoard");
const box = new Array(9).fill('#');

box.forEach((elem, i)=> {
    gameBoard.insertAdjacentHTML('beforeend', `<li class="tic" id="${i}">${elem}</li>`)
})

const allBtn = document.querySelectorAll('.tic');


let defState = false;

const gameArr = new Array(9).fill('empty')

    
allBtn.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        if(btn.innerHTML === '#' && winStat === false){
            if(defState === false){
                btn.innerHTML = 'X';
            }else{
                btn.innerHTML = 'O'
            }
            defState = !defState;
        }
        gameArr[index] = btn.innerHTML;
        checkWinner(gameArr);
        checkIsdraw(gameArr);
        
    })
})


const resetGame = document.querySelector('#reset');
resetGame.addEventListener('click',()=>{
    
    location.reload();
})

let winStat = false;

const checkWinner = (arr) => {
    if(arr[0] ===arr[1] 
        && arr[0] === arr[2]
        && arr[0]!=='empty'){
        winStat = true;
        alert(`${arr[0]} won the game`);

    }
    if(arr[3] ===arr[4] 
        && arr[3] === arr[5]
        && arr[3]!=='empty'){
            winStat = true;
        alert(`${arr[3]} won the game`)
    }
    if(arr[6] ===arr[7] 
        && arr[6] === arr[8]
        && arr[6]!=='empty'){
        alert(`${arr[6]} won the game`)
    }
    if(arr[0] ===arr[3] 
        && arr[0] === arr[6]
        && arr[0]!=='empty'){
            winStat = true;
        alert(`${arr[0]} won the game`)
    }
    if(arr[1] ===arr[4] 
        && arr[1] === arr[7]
        && arr[1]!=='empty'){
            winStat = true;
        alert(`${arr[1]} won the game`)
    }
    if(arr[2] ===arr[5] 
        && arr[2] === arr[8]
        && arr[2]!=='empty'){
            winStat = true;
        alert(`${arr[2]} won the game`)
    }
    if(arr[0] ===arr[4] 
        && arr[0] === arr[8]
        && arr[0]!=='empty'){
            winStat = true;
        alert(`${arr[0]} won the game`)
    }
    if(arr[2] ===arr[4] 
        && arr[2] === arr[6]
        && arr[2]!=='empty'){
            winStat = true;
        alert(`${arr[2]} won the game`)
    }
}



const checkIsdraw = (arr) => {
    let counter = 0;
   for (let elem of arr){
       if(elem !== 'empty') {
           counter = counter+1
       }
       }
       console.log(counter)
       if(counter === 9 && winStat===false){
           alert("draw")
       }
       
   }

   
