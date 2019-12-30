import React, { useContext } from 'react'
import playerContext from "../context/playerContext"
import "../styles/CurrentPlayerDisplayer.scss"

const CurrrentUser = () => {
    const { currentPlayer } = useContext(playerContext)
    return (
        <div className="current-player-wrapper animated zoomIn delay-1s">
            Player: {currentPlayer}
        </div>
    )
}

export default CurrrentUser
