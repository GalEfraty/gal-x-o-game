import React, { useContext } from "react";
import "../styles/WinnerMessage.scss";
import boardContext from "../context/boardContext";

const WinnerMessage = () => {
  const { winnerState } = useContext(boardContext);

  return (
    <div className="winner-message-wrapper animated tada">
      <i className="fas fa-trophy i-winner"></i>
      <span className="winner-wrapper ">
        {" "}
        <span className="span-winner">{winnerState.player}</span> is the winner
        !!!
      </span>
    </div>
  );
};

export default WinnerMessage;
