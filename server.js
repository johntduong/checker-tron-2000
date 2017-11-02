'user strict';
var express = require('express');
var app = express();

var board = [
['x','o','x','o','x','o','x','o'],
['o','x','o','x','o','x','o','x'],
['x','o','x','o','x','o','x','o'],
['x','x','x','x','x','x','x','x'],
['x','x','x','x','x','x','x','x'],
['o','x','o','x','o','x','o','x'],
['x','o','x','o','x','o','x','o'],
['o','x','o','x','o','x','o','x']
]

var createNewBoard = function() {
  var playerSide;
  board.forEach(function(row, rowIndex) {
    row.forEach(function(col, colIndex) {
      if (col === 'o') {
        if (rowIndex <= 2) {
          playerSide = 'black';
        } else {
          playerSide = 'red';
        }
        board[rowIndex][colIndex] = new Piece(rowIndex, colIndex, playerSide);
      }
    })
  })
}

var Piece = function(x,y,p) {
  this.position = [x,y];
  this.status = 'alive';
  this.player = p;
  this.king = 'no';
}

Piece.prototype.move = function(x,y) {
  
}

var port = 3000;
app.listen(port);
console.log('Listening on port', port);
createNewBoard();