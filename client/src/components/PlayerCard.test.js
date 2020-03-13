import React from 'react';
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

test("all elements of player card render", () => {
    const player = {
        name: 'playerName',
        country: "united states",
        searches: "50"
    }
    const { getByText } = render(<PlayerCard player={player} />);

    getByText(/playername/i);
    getByText(/united states/i);
    getByText(/50/i);
})