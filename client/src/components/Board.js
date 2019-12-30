import React, { useState, useContext, useEffect } from "react";
import Rubric from "./Rubric";
import "../styles/board.scss";
import CurrentPlayerDisplayer from "./CurrentPlayerDisplayer";
import playerContext from "../context/playerContext";
import boardContext from "../context/boardContext";
import { hasWinner, hasTie } from "../gameLogic/hasWinner";
import WinnerMessage from "../components/WinnerMessage";
import TieMessage from "../components/TieMessage";

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
  const [tieState, setTie] = useState(false);

  useEffect(() => {
    const winner = hasWinner(boardState);
    const tie = hasTie(boardState);
    if (winner) {
      setwinner(winner);
    }
    if (tie) {
      setTie(true);
    }
  }, [boardState]);

  const updateBoard = rubricIndex => {
    let tempBoard = { ...boardState };
    tempBoard[rubricIndex] = currentPlayer;
    setBoardState(tempBoard);
    if (!winnerState && !tieState) {
      switchPlayer();
    }
  };

  const initBoard = () => {
    setBoardState(initialBoardState);
    setwinner(null);
    setTie(false);
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
        {tieState && <TieMessage />}
      </boardContext.Provider>
      {(winnerState || tieState) && (
        <button
          className="restart-btn btn btn-outline-dark animated heartBeat delay-1s"
          onClick={initBoard}
        >
          Init board!
        </button>
      )}
    </main>
  );
};

export default Board;
