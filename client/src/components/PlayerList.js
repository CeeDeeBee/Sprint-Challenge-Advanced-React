import React from "react";
import PlayerCard from "./PlayerCard";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PlayerList = ({ data, setData }) => {
    const [sortType, setSortType] = useLocalStorage('sortType', 'searchInterest');

    const compareFunctions = {
        name: (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }

            return 0;
        },
        country: (a, b) => {
            if (a.country < b.country) {
                return -1;
            }
            if (a.country > b.country) {
                return 1;
            }

            return 0;
        },
        searchInterest: (a, b) => {
            return b.searches - a.searches;
        }

    }

    const handleChange = e => {
        setSortType(e.target.value);
        setData([...data].sort(compareFunctions[e.target.value]));
    }

    return (
        <div className="player-list-wrapper">
            <label htmlFor="player-sort">Sort By </label>
            <select name="player-sort" id="player-sort" value={sortType} onChange={handleChange}>
                <option value="searchInterest">Search Interest</option>
                <option value="name">Name</option>
                <option value="country">Country</option>
            </select>
            <div className="player-list">
                {data.map(player => <PlayerCard key={player.id} player={player} />)}
            </div>
        </div>
    )
}

export default PlayerList;