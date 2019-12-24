import React, {useState} from "react";
import "../styles/styles.scss";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import playerContext from "../context/playerContext";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const switchPlayer = () => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

  return (
    <div className="App">
      <Header />
      <playerContext.Provider value={{currentPlayer, switchPlayer}}>
        <Board />
      </playerContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
