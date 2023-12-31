var gridDisplay = document.querySelector(".grid");
var score = document.querySelector(".score");
var time = document.querySelector(".time");
var res= 0;
var hitpos;
var countdown = 60;
var timerId = null;
var countDownTimerId = null;
for(let i=1;i<10;i++){
    var grid = document.createElement('img');
    gridDisplay.appendChild(grid);
    grid.style.width = "200px";
    grid.style.height = "200px";
    grid.style.border = "1px solid black";
    grid.setAttribute("data-id", i);
    grid.classList.add("square");
}
var squares = document.querySelectorAll('.square');
console.log(squares);

function assignmole(){
    squares.forEach(square => {
            square.classList.remove("mole");
        });
    var randpos = squares[(Math.floor(Math.random() * 9 ))];
    randpos.classList.add("mole");
    hitpos = randpos.getAttribute("data-id");
    squares.forEach(square => {
        square.addEventListener("click",()=>{
            if(square.getAttribute("data-id") === hitpos){
                res++;
                score.textContent = res;
                hitpos= null;
            }
            
        })
    });
    
}
function timer(){
    timerId = setInterval(assignmole,500);
}
document.getElementById("play").addEventListener("mousedown",function(){
    countDownTimerId = setInterval(clock,1000);
    countdown = 60;
    res =0;
    console.log("clicked");
    timer();

})
function clock(){
    countdown--;
    time.textContent = countdown;
    if(countdown == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert(`GAME OVER. Your final score is ${res}`);
    }

}
