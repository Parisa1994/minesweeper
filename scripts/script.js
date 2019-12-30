import './../styles/main.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
//================hide class and show===========
$('#start').on('click', function(){
    $('#game').removeClass('hide');
    $('#startGame').addClass('hide');
    var cellsGame = $('#cells').val();
    config.row = cellsGame;
    config.col = cellsGame;
    const TotalCells = config.row * config.col;
    var levelGame = $("#lavel").val();
    config.bomb = Math.floor((TotalCells * difficulty[levelGame]) / 100);
    config.score = Math.floor((TotalCells * 10) / 100);
    generateGame(config.row, config.col, config.bomb, config.score);
})
//==================value===================
var config = {
    row: null,
    col: null,
    bomb: null,
    score: 0
}
var difficulty = {
    hard: 80,
    medium: 50,
    easy: 30
}
//=================generateGame==============
function generateGame(row, col, bomb, score){
    const wrap = document.querySelector(".wrap");
    $(".wrap").html("");
    for(var i = 0; i < config.row; i++){
        for(var j=0; j < config.col; j++){
            [i][j] = $('<span class="text-center border home"><span>').appendTo(".wrap");
        }
    }
    wrap.style.setProperty("width", config.row*50 + "px");
    wrap.style.setProperty("heigth", config.col*50 + "px");
    //bomb
    var Bomb = generateBomb();
    Bomb.forEach(item => {
        $(".wrap").find('span:nth-child('+(item + 1 )+')').attr('data-bomb', 'true');
    });

    //score 
    var Score = generateScore();
    Score.forEach(element => {
        $(".wrap").find('span:nth-child('+ (element + 1) +')').attr('data-score', randomDefault(10, 20));
    })    
    console.log('score' + Score);
    console.log( 'bomb' + Bomb);
    //css
    $('.wrap span').on('click', function(){
        const isBomb = $(this).data('bomb');
        const isEnd = $('.wrap').hasClass('disabled');
        const isScore = $(this).data('score');
        $('.wrap span[data-score]').css('background-color', 'blue')

        if(!isEnd){
            if(isBomb){
                $('.wrap span[data-bomb=true]').css('background-color', 'red');
                $('.wrap').addClass('disabled');
                alert(' you are losed :( ');
            }else{
                $(this).css('background-color', 'green');
                const totalScore =  isScore ?  Number($('#score b').text()) + isScore : Number($('#score b').text()) + 5 ;
                $("#score b").html(totalScore);
        }
        }
    })
}

//====================randomfunction=============
function randomDefault(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//=====================variables===========
var Score = [];
var  Bomb = [];
var TotalCells = config.row * config.col; 
const ranCells = randomDefault(0, TotalCells);

//==================generateBomb================
function generateBomb(){
    for(let i = 0; i < config.bomb; i++){
        if(Bomb.indexOf(ranCells) === -1){
            Bomb.push(ranCells);
        }else {
            Bomb.push(randomDefault(0, TotalCells))
        }
    }
    return Bomb;
}
//=====================generateScore===========
function generateScore(){
    for(let i = 0; i < config.score; i++){
        if(Score.indexOf(ranCells) === -1 && Bomb.indexOf(ranCells) === -1){
            Score.push(ranCells);
        }else{
            Score.push(randomDefault(0, TotalCells));
        }
    }
    return Score;
}

//=============restart====================
$('#restart').on('click', function(){
    generateGame(config.row, config.col, config.bomb, config.score);
    $('.wrap').removeClass('disabled');
    $('#score b').html('0');
    const isScore = $(this).data('score');
})

//=============newGame===========
$('#newGame').on('click', function(){
    $("#game").addClass("hide");
    $("#startGame").removeClass("hide");
    $('.wrap').removeClass('disabled');
    $('#score b').html('0');
})
