// let initialBoardState = {
//   1: "",
//   2: "",
//   3: "",
//   4: "",
//   5: "",
//   6: "",
//   7: "",
//   8: "",
//   9: ""
// };
//winner = {null / {player: ("X"/"O"), indexes: [1,2,3]}}

const hasWinner = boardState => {
  //console.log("boardState from hasWinner: ", boardState)
  const rowsWinner = hasWinnerInRows(boardState);
  if (rowsWinner) {
    return rowsWinner;
  }
  const colsWinner = hasWinnerInCols(boardState);
  if (colsWinner) {
    return colsWinner;
  }
  const diagonalsWinner = hasWinnerInDiagonals(boardState);
  if (diagonalsWinner) {
    return diagonalsWinner;
  }

  return null;
};

export default hasWinner;

const hasWinnerInRows = boardState => {
  //123 - 456 - 789
  if (
    boardState[1] === boardState[2] &&
    boardState[2] === boardState[3] &&
    boardState[1]
  ) {
    return { player: boardState[1], indexes: [1, 2, 3] };
  } else if (
    boardState[4] === boardState[5] &&
    boardState[5] === boardState[6] &&
    boardState[4]
  ) {
    return { player: boardState[4], indexes: [4, 5, 6] };
  } else if (
    boardState[7] === boardState[8] &&
    boardState[8] === boardState[9] &&
    boardState[7]
  ) {
    return { player: boardState[7], indexes: [7, 8, 9] };
  }

  return null;
};

const hasWinnerInCols = boardState => {
  //147 - 258 - 369
  if (
    boardState[1] === boardState[4] &&
    boardState[4] === boardState[7] &&
    boardState[1]
  ) {
    return { player: boardState[1], indexes: [1, 4, 7] };
  } else if (
    boardState[2] === boardState[5] &&
    boardState[5] === boardState[8] &&
    boardState[2]
  ) {
    return { player: boardState[2], indexes: [2, 5, 8] };
  } else if (
    boardState[3] === boardState[6] &&
    boardState[6] === boardState[9] &&
    boardState[3]
  ) {
    return { player: boardState[3], indexes: [3, 6, 9] };
  }

  return null;
};

const hasWinnerInDiagonals = boardState => {
  //159 - 753
  if (
    boardState[1] === boardState[5] &&
    boardState[5] === boardState[9] &&
    boardState[1]
  ) {
    return { player: boardState[1], indexes: [1, 5, 9] };
  } else if (
    boardState[7] === boardState[5] &&
    boardState[5] === boardState[3] &&
    boardState[7]
  ) {
    return { player: boardState[7], indexes: [7, 5, 3] };
  }

  return null;
};
