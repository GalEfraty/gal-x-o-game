import React, { useState, useContext, useEffect } from "react";
import Rubric from "./Rubric";
import "../styles/board.scss";
import CurrentPlayerDisplayer from "./CurrentPlayerDisplayer";
import playerContext from "../context/playerContext";
import boardContext from "../context/boardContext";
import hasWinner from "../gameLogic/hasWinner";
import WinnerMessage from "../components/WinnerMessage";

let initialBoardState = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: ""
};

const Board = () => {
  const { currentPlayer, switchPlayer } = useContext(playerContext);
  const [boardState, setBoardState] = useState(initialBoardState);
  const [winnerState, setwinner] = useState(null);
  useEffect(() => {
    //console.log("board state from board useEffect is: ", boardState);
    const winner = hasWinner(boardState);
    if (winner) {
      setwinner(winner);
      console.log("winner: ", winner);

      //also render a winner component!
    }
  }, [boardState]);

  const updateBoard = rubricIndex => {
    let tempBoard = { ...boardState };
    tempBoard[rubricIndex] = currentPlayer;
    setBoardState(tempBoard);
    switchPlayer();
  };

  const initBoard = () => {
    setBoardState(initialBoardState);
    setwinner(null);
  };

  return (
    <main>
      <CurrentPlayerDisplayer />
      <boardContext.Provider value={{ updateBoard, winnerState }}>
        <table className="board-table animated bounceInLeft delay-1s">
          <tbody>
            <tr>
              <td>
                <Rubric rubricState={{ content: boardState[1], index: 1 }} />
              </td>
              <td className="td-left-border">
                <Rubric rubricState={{ content: boardState[2], index: 2 }} />
              </td>
              <td className="td-left-border">
                <Rubric rubricState={{ content: boardState[3], index: 3 }} />
              </td>
            </tr>
            <tr>
              <td className="td-top-border">
                <Rubric rubricState={{ content: boardState[4], index: 4 }} />
              </td>
              <td className="td-left-border td-top-border">
                <Rubric rubricState={{ content: boardState[5], index: 5 }} />
              </td>
              <td className="td-left-border td-top-border">
                <Rubric rubricState={{ content: boardState[6], index: 6 }} />
              </td>
            </tr>
            <tr>
              <td className="td-top-border">
                <Rubric rubricState={{ content: boardState[7], index: 7 }} />
              </td>
              <td className="td-left-border td-top-border">
                <Rubric rubricState={{ content: boardState[8], index: 8 }} />
              </td>
              <td className="td-left-border td-top-border">
                <Rubric rubricState={{ content: boardState[9], index: 9 }} />
              </td>
            </tr>
          </tbody>
        </table>
        {winnerState && <WinnerMessage />}
      </boardContext.Provider>
      <button className="restart-btn btn btn-outline-dark animated bounceInUp delay-1s" onClick={initBoard}>
        Restart Game!
      </button>
    </main>
  );
};

export default Board;
