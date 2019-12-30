
const hasWinner = boardState => {
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

const isBoardEmpty = boardState => {
  const keys = Object.keys(boardState);
  for (let key in keys) {
    if (boardState[key] !== "") {
      return false;
    }
  }
  return true;
};

const hasTie = boardState => {
  // let boardStateX = {1: "X", 2: "X", 3: "O", 4: "O", 5: "O", 6: "X", 7: "X", 8: "O", 9: ""}
  const keys = Object.keys(boardState);

  for(let i = 1 ; i <= keys.length ; i++){
    if (boardState[i] === "") {
      // console.log("key iterate: ", i)
      return false;
    }
  }

  // console.log(keys)
  // console.log("tie!")
  return true;
};

export { hasWinner, isBoardEmpty, hasTie };
