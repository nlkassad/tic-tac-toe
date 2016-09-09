'use strict';


const indexCells = (data) => {
  let indices = [];
  let array = data.cells;
  let element = 'x';
  let idx = array.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
};

// get array values
// filter values for current user
// http://api.jquery.com/filter/
// look for match in Array
// https://api.jquery.com/jQuery.inArray/

// const getCellsX = function (data) {
//   let cellMarkers = jQuery.grep( [ data ], function( marker ) {
//   return marker !== "x";
//   });
//   console.log(cellMarkers);
//   return cellMarkers;
// };

module.exports = {
  indexCells,
};


// const testWinning = (board){
//   for(var i=0 max=board.length; i < max; i++){
//     var a, b, c;
//     //these varaibles become what the board is holding 'x', 'o', or 0
//     a = board[wins[i][0]];
//     b = board[wins[i][1]];
//     c = board[wins[i][2]];
//
//     if(a == b && a == c && a != 0){
//       return a;
//     }
//   }
//   return false;
// }
