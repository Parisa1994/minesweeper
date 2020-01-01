import './../styles/main.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import $ from 'jquery'

//==================value=======================
// var config = {
//     row: null,
//     col: null,
//     bomb: null,
//     score: 0
// }
// var difficulty = {
//     hard: 80,
//     medium: 50,
//     easy: 30
// }

//================hide class and show with jquery===========
// $('#start').on('click', function(){
//     $('#game').removeClass('hide');
//     $('#startGame').addClass('hide');
//     const cellsGame = Number($('#cells').val());
//     const levelGame = $("#lavel").val();
//     config.row = cellsGame;
//     config.col = cellsGame;
//     const TotalCells = config.row * config.col;
//     config.bomb = Math.floor((TotalCells * difficulty[levelGame]) / 100);
//     config.score = Math.floor((TotalCells * 10) / 100);
//     generateGame();
// })


//=================generateGame jquery===================
// function generateGame(){
//     const wrap = document.querySelector(".wrap");
//     wrap.innerHTML = '';

//     for(var i = 0; i < config.row; i++){
//         for(var j=0; j < config.col; j++){
//             var a = document.createElement('span');
//             a.classList.add('text-center');
//             a.classList.add('border');
//             a.classList.add('home');
//             wrap.appendChild(a);
//         }
//     }

//     wrap.style.setProperty("width", config.row*50 + "px");
//     wrap.style.setProperty("heigth", config.col*50 + "px");
//     //bomb
//     var Bomb = generateBomb();
//     Bomb.forEach(item => {
//         $(".wrap").find('span:nth-child('+(item + 1 )+')').attr('data-bomb', 'true');
//     });

//     //score 
//     var Score = generateScore();
//     Score.forEach(element => {
//         $(".wrap").find('span:nth-child('+ (element + 1) +')').attr('data-score', randomDefault(10, 20));
//     })    
//     console.log('score' + Score);
//     console.log( 'bomb' + Bomb);
//     //css
//     $('.wrap span').on('click', function(){
//         const isBomb = $(this).data('bomb');
//         const isEnd = $('.wrap').hasClass('disabled');
//         const isScore = $(this).data('score');
//         $('.wrap span[data-score]').css('background-color', 'blue')

//         if(!isEnd){
//             if(isBomb){
//                 $('.wrap span[data-bomb=true]').css('background-color', 'red');
//                 $('.wrap').addClass('disabled');
//                 alert(' you are losed :( ');
//             }else{
//                 $(this).css('background-color', 'green');
//                 const totalScore =  isScore ?  Number($('#score b').text()) + isScore : Number($('#score b').text()) + 5 ;
//                 $("#score b").html(totalScore);
//             }
//         }
//     })
// }

//====================randomfunction with jquer=====================
// function randomDefault(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

//=====================variables jquery =========================
// var Score = [];
// var  Bomb = [];
// var TotalCells = config.row * config.col; 
// const ranCells = randomDefault(0, TotalCells);


//==================generateBomb jquery=========================
// function generateBomb(){
//     for(let i = 0; i < config.bomb; i++){
//         if(Bomb.indexOf(ranCells) === -1){
//             Bomb.push(ranCells);
//         }else {
//             Bomb.push(randomDefault(0, TotalCells))
//         }
//     }
//     return Bomb;
// }


//=====================generateScore jquery===================
// function generateScore(){
//     for(let i = 0; i < config.score; i++){
//         if(Score.indexOf(ranCells) === -1 && Bomb.indexOf(ranCells) === -1){
//             Score.push(ranCells);
//         }else{
//             Score.push(randomDefault(0, TotalCells));
//         }
//     }
//     return Score;
// }

//===================restart with jquery=============================
// $('#restart').on('click', function(){
//     generateGame(config.row, config.col, config.bomb, config.score);
//     $('.wrap').removeClass('disabled');
//     $('#score b').html('0');
//     const isScore = $(this).data('score');
// })

//==================newGame with jquery==============================
// $('#newGame').on('click', function(){
//     $("#game").addClass("hide");
//     $("#startGame").removeClass("hide");
//     $('.wrap').removeClass('disabled');
//     $('#score b').html('0');
// })


//=========================================================================javscript game ==================================================
//================variables===========
var config = {
    row: null,
    col: null,
    bomb: 10,
    score: null
}
// var difficulty = {
//     easy: 30,
//     medium: 50,
//     haed: 80
// }
const wrap = document.querySelector(".wrap");
//================hide class and show=============
function start(){
    document.getElementById("game").style.display = 'block';
    document.getElementById("startGame").style.display = 'none';
    var cellsGame = Number(document.getElementById("cells").value);
    config.row = cellsGame;
    config.col = cellsGame;
    var lavel = document.getElementById("lavel").value;

    generateGame();
};

document.getElementById("start").addEventListener("click", start);

//============generate Game============
function generateGame(){
    wrap.innerHTML = '';
    for(let i = 0; i < config.row; i++){
        for(let j=0; j < config.col; j++){
            var a = document.createElement('span');
            a.classList.add('text-center');
            a.classList.add('border');
            a.classList.add('home');
            wrap.appendChild(a);
        }
    }
    wrap.style.setProperty("width", config.row*50 + "px");
    wrap.style.setProperty("heigth", config.col*50 + "px");
    //bomb
    const Bomb = generateBomb();
    var cellsWrap= document.getElementById("cellsWrap");
    var cellsChild = cellsWrap.querySelectorAll("span");
    Bomb.forEach(item => {
        cellsChild[1].setAttribute("data-bomb", "true");
        // cellsWrap.find('cellsChild:nth-child(' + item + ')').setAttribute("data-bomb", "true");
    });
    console.log(Bomb);
}
//=============random defalut=======
function randomDefault(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//============generate bomb =====
function generateBomb(){
    var Bomb = [];
    const CellCount = config.row * config.col;
    for(let i = 0; i < config.bomb; i++){
        const RND = randomDefault(0, CellCount);
        if(Bomb.indexOf(RND) === -1){
            Bomb.push(RND);
        }else {
            Bomb.push(randomDefault(0, CellCount))
        }
    }
    return Bomb;
}
