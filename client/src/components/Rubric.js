import React, { useContext } from "react";
import "../styles/rubric.scss";
import playerContext from "../context/playerContext";
import boardContext from "../context/boardContext";

const Rubric = ({ rubricState: { content, index } }) => {
  const { currentPlayer } = useContext(playerContext);
  const { updateBoard, winnerState } = useContext(boardContext);

  const onRubricClick = () => {
    updateBoard(index);
  };

  return (
    <div
      className="rubric-wrapper"
      onClick={onRubricClick}
      style={
        content || winnerState
          ? { pointerEvents: "none" }
          : { pointerEvents: "auto" }
      }
    >
      <span
        className={content ? "rubric-has-content" : "rubric-empty-content"}
        style={
          winnerState && winnerState.indexes.includes(index)
            ? { color: "red", transition: "1s ease-out" }
            : null
        }
      >
        {content ? content : currentPlayer}
      </span>
    </div>
  );
};
export default Rubric;
