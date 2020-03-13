import React from 'react';
import { render, within, fireEvent } from "@testing-library/react";
import PlayerList from "./PlayerList";
import { act } from "react-dom/test-utils";

let data = [{ name: "Alex Morgan", country: "United States", searches: 100, id: 0 },
{ name: "Megan Rapinoe", country: "United States", searches: 99, id: 1 },
{ name: "Marta", country: "Brazil", searches: 18, id: 2 },
{ name: "Rose Lavelle", country: "United States", searches: 11, id: 3 },
{ name: "Carli Lloyd", country: "United States", searches: 9, id: 4 }]

const setData = () => {
    data.sort((a, b) => {
        if (a.country < b.country) {
            return -1;
        }
        if (a.country > b.country) {
            return 1;
        }

        return 0;
    })
}

test("all player cards render", () => {
    const { getAllByText } = render(<PlayerList data={data} />);

    const playerCards = getAllByText(/search interest/i);
    expect(playerCards).toHaveLength(6);
});

test("can change sort order", async () => {
    const { getByLabelText, getAllByText, getByText } = render(<PlayerList data={data} setData={setData} />);

    const sortSelect = getByLabelText(/sort by/i);
    await act(async () => {
        fireEvent.change(sortSelect, { target: { value: 'country' } });
    });

    const playerCards = getAllByText(/search interest/i);
    within(playerCards[1]).getByText(/18/i);
})