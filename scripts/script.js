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
    bomb: null,
    score: null
}
//=================generateGame=========
function generateGame(row, col, bomb, score){
    const wrap = document.querySelector(".wrap")
    for(var i = 0; i < config.row; i++){
        for(var j=0; j < config.col; j++){
            [i][j] = $('<span class="text-center border home"><span>').appendTo(".wrap");
        }
    }

}


