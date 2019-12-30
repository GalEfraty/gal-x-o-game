import React from "react";
import "../styles/WinnerMessage.scss";

const WinnerMessage = () => {
  return (
    <div className="winner-message-wrapper animated tada">
      <i className="fas fa-equals i-winner"></i>
      <span className="winner-wrapper">
        {" "}
        Tie!!
      </span>
    </div>
  );
};

export default WinnerMessage;
