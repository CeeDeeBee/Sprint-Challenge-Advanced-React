import React from "react";

const PlayerCard = ({ player }) => {
    return (
        <div className="player-card">
            <h2>{player.name}</h2>
            <h3>{player.country}</h3>
            <p>Search Interest: {player.searches}</p>
        </div>
    )
}

export default PlayerCard;