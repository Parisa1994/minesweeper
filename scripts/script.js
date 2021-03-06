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

//================hide class and show ===========
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


//=================generateGame===================
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
//var  Bomb = [];

//==================generateBomb=========================
// function generateBomb(){
//    var  Bomb = [];
//    var TotalCells = config.row * config.col; 
//     for(let i = 0; i < config.bomb; i++){
//         const ranCells = randomDefault(0, TotalCells);
//         if(Bomb.indexOf(ranCells) === -1){
//             Bomb.push(ranCells);
//         }else {
//             Bomb.push(randomDefault(0, TotalCells))
//         }
//     }
//     return Bomb;
// }


//=====================generateScore===================
// function generateScore(){
//     var Score = [];
//     var TotalCells = config.row * config.col; 
//     for(let i = 0; i < config.score; i++){
//     const ranCells = randomDefault(0, TotalCells);
//         if(Score.indexOf(ranCells) === -1 && Bomb.indexOf(ranCells) === -1){
//             Score.push(ranCells);
//         }else{
//             Score.push(randomDefault(0, TotalCells));
//         }
//     }
//     return Score;
// }

//===================restart with =============================
// $('#restart').on('click', function(){
//     generateGame(config.row, config.col, config.bomb, config.score);
//     $('.wrap').removeClass('disabled');
//     $('#score b').html('0');
//     const isScore = $(this).data('score');
// })

//==================newGame with ==============================
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
    bomb: null,
    score: 0
}

var difficulty = {
    easy: 30,
    medium: 50,
    hard: 80
}
const wrap = document.querySelector(".wrap");
//================hide class and show=============
function start(){
    document.getElementById("game").style.display = 'block';
    document.getElementById("startGame").style.display = 'none';
    var cellsGame = Number(document.getElementById("cells").value);
    config.row = cellsGame;
    config.col = cellsGame;
    var lavel = document.getElementById("lavel").value;
    const TotalCells = config.row * config.col;
    config.bomb = Math.ceil(Math.floor((TotalCells * difficulty[lavel]) / 100));
    config.score = Math.ceil(Math.floor(TotalCells * 10 ) / 100);
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
    const GEN_RES = generateBomb();
    const Bomb = GEN_RES.Bomb;
    const Cells = document.querySelectorAll('.wrap span');
    Bomb.forEach(item => {
        if(wrap.querySelector('span:nth-child('+ (item + 1) +')')){
            wrap.querySelector('span:nth-child('+ (item + 1) +')').setAttribute('data-bomb', 'true')
        }
    });

    //score
    const Score = GEN_RES.Score;
    Score.forEach(element => {
        if(wrap.querySelector('span:nth-child('+ (element + 1) +')')){
            wrap.querySelector('span:nth-child( '+ (element + 1) +' )').setAttribute('data-score', randomDefault(15, 25));
        }
    });

    Array.prototype.diff = function(arr2) {
        var ret = [];
        for(var i in this) {   
            if(arr2.indexOf(this[i]) > -1){
                ret.push(this[i]);
            }
        }
        return ret;
    };

    console.log(Bomb.diff(Score), Score, Bomb)

    //css
    function cellClick(){
        const isBomb = this.getAttribute('data-bomb');
        const isScore = this.getAttribute('data-score');
        const isEnd  = document.getElementsByClassName('disabled');

        if(!isEnd.length){
            if(isBomb){
                const CellsBomb = document.querySelectorAll('.wrap span[data-bomb]');
                for(let i = 0; i < CellsBomb.length; i++){
                    CellsBomb[i].style.backgroundColor = "red";
                }
                alert(" you lose :(");
                for(let i = 0; i < Cells.length; i++){
                    Cells[i].classList.add('disabled');
                }
                wrap.classList.add('disabled');
                return;

            }else if(isScore){
                console.log('This is a score: ' +  Score ) ;
                this.style.backgroundColor = "blue";
                const scoreYou = document.querySelector("#score b");
                const totalScore = Number(scoreYou.textContent) + Score[0];
                scoreYou.innerHTML = totalScore;
                return;
            }
            console.log('Normal');
                this.style.backgroundColor = "green";
                const scoreYou = document.querySelector("#score b");
                const totalScore = Number(scoreYou.textContent) + 5 ;
                scoreYou.innerHTML = totalScore;
            }
    }
    for(let i = 0; i < Cells.length; i++){
        Cells[i].addEventListener('click', cellClick.bind(Cells[i]));
    }
}

//=============random defalut==========
function randomDefault(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;;
}

//============generate bomb ===========
function generateBomb(){
    var Bomb = [];
    var Score = [];
    const CellCount = config.row * config.col;

    while(Bomb.length < config.bomb){
        const RND = randomDefault(0, CellCount);
        if( Bomb.indexOf(RND) === -1 ) Bomb.push(RND);
    }

    Score = generateScore(Bomb);

    return {
        Score,
        Bomb
    };
}

//=========generate score=============
function generateScore(Bombs){
    var Score = [];
    const CellsCount = config.row * config.col;
    while(Score.length < config.score){
        const RND = randomDefault(0, CellsCount);

        if( Score.indexOf(RND) === -1 && Bombs.indexOf(RND) === -1 ) {
            Score.push(RND);
        }
    }

    return Score;
}

//==================restart button===========
const restart = document.getElementById("restart");
restart.addEventListener('click', function(){
    generateGame(config.row, config.col, config.bomb);
    wrap.classList.remove("disabled");
    document.querySelector('#score b').innerHTML = '0';

});

//===============newgame===================
const newgame = document.getElementById('newGame');
newgame.addEventListener('click', function(){
    document.getElementById("game").style.display = 'none';
    document.getElementById("startGame").style.display = 'flex';
    wrap.classList.remove("disabled");
    document.querySelector('#score b').innerHTML = '0';
});