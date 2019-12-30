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
    generateGame(config.row, config.col, config.bomb, config.score);

})
//==================value===================
var config = {
    row: null,
    col: null,
    bomb: 10,
    score: null
}
// var difficulty = {
//     hard,
//     medium,
//     esay
// }
//=================generateGame=========
function generateGame(row, col, bomb, score){
    const wrap = document.querySelector(".wrap")
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
        $(".wrap").find('span:nth-child('+(item + 1 )+')').attr('databomb', 'true');
    });
    console.log(Bomb);

}

//====================randomfunction=============
function randomDefault(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//==================generateBomb================
function generateBomb (){
    var  Bomb = [];
    var TotalCells = config.row * config.col; 

    for(var i = 0; i < config.bomb ; i++){
        var ranBomb = randomDefault(0, TotalCells);
        if(Bomb.indexOf(ranBomb) === -1){
            Bomb.push(ranBomb);
        }else {
            Bomb.push(ranBomb(0, TotalCells));
        }
    }
    return Bomb;
}
