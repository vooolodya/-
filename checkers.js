var map;
var divSquare = '<div id = "s$coord" class = "square $color"></div>';
var divFigure = '<div id = "f$coord" class = "figure">$figure</div>';

$(function(){
    start();
})

function start(){
    map = new Array(64);
    createBoard();
    showFigures('1w1w1w1ww1w1w1w1111111111111111111111111111111111b1b1b1bb1b1b1b1');
}

function setDraggable(){
    $('.figure').draggable();
}

function setDroppable(){
    $('.square').droppable({
        drop: function(envent, ui){
            var frCoord = ui.draggable.attr('id').substring(1);
            var toCoord = this.id.substring(1);
            moveFigure(frCoord, toCoord);
        }
    });
}

function moveFigure(frCoord, toCoord){
    figure = map[frCoord];
    showFigureAt(frCoord, '1');
    showFigureAt(toCoord, figure);
}

function createBoard() {
    $('.board').html('');
    for (var coord = 0; coord < 64; coord++)
    {
        $('.board').append(divSquare.replace('$coord', coord).replace('$color', isBlackSquareAt(coord) ? 'black' : 'white'));
    }
    setDroppable();
}

function isBlackSquareAt(coord){
    return (coord % 8 + Math.floor(coord / 8)) % 2;
}

function showFigures(figure){
    for (var coord = 0; coord < 64; coord++)
    showFigureAt(coord, figure.charAt(coord));
}

function showFigureAt(coord, figure){
    map[coord] = figure;
    $('#s' + coord).html(divFigure.replace('$coord', coord).replace('$figure', getCheckersSymbol(figure)));
    setDraggable();
}

function getCheckersSymbol(figure){
    switch(figure){
        case 'w' : return '&#127761;';
        case 'b' : return '&#127765;';
        default : return '';
    }
}