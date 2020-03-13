import React from 'react';
import { render, within, fireEvent } from "@testing-library/react";
import PlayerList from "./PlayerList";
import { act } from "react-dom/test-utils";

let data = [{ name: "Alex Morgan", country: "United States", searches: 100, id: 0 },
{ name: "Megan Rapinoe", country: "United States", searches: 99, id: 1 },
{ name: "Marta", country: "Brazil", searches: 18, id: 2 },
{ name: "Rose Lavelle", country: "United States", searches: 11, id: 3 },
{ name: "Carli Lloyd", country: "United States", searches: 9, id: 4 }]

const countrySort = () => {
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

const nameSort = () => {
    data.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }

        return 0;
    });
}

const searchSort = () => {
    data.sort((a, b) => {
        return b.searches - a.searches;
    });
}

test("all player cards render", () => {
    const { getAllByText } = render(<PlayerList data={data} />);

    const playerCards = getAllByText(/search interest/i);
    expect(playerCards).toHaveLength(6);
});

test("can sort by country", async () => {
    const { getByLabelText, getAllByText, getByText } = render(<PlayerList data={data} setData={countrySort} />);

    const sortSelect = getByLabelText(/sort by/i);
    await act(async () => {
        fireEvent.change(sortSelect, { target: { value: 'country' } });
    });

    const playerCards = getAllByText(/search interest/i);
    within(playerCards[1]).getByText(/18/i);
    within(playerCards[2]).getByText(/100/i);
    within(playerCards[3]).getByText(/99/i);
    within(playerCards[4]).getByText(/11/i);
    within(playerCards[5]).getByText(/9/i);
});

test("can sort by name", async () => {
    const { getByLabelText, getAllByText, getByText } = render(<PlayerList data={data} setData={nameSort} />);

    const sortSelect = getByLabelText(/sort by/i);
    await act(async () => {
        fireEvent.change(sortSelect, { target: { value: 'name' } });
    });

    const playerCards = getAllByText(/search interest/i);
    within(playerCards[1]).getByText(/100/i);
    within(playerCards[2]).getByText(/9/i);
    within(playerCards[3]).getByText(/18/i);
    within(playerCards[4]).getByText(/99/i);
    within(playerCards[5]).getByText(/11/i);
});

test("can sort by search interest", async () => {
    const { getByLabelText, getAllByText, getByText } = render(<PlayerList data={data} setData={searchSort} />);

    const sortSelect = getByLabelText(/sort by/i);
    await act(async () => {
        fireEvent.change(sortSelect, { target: { value: 'name' } });
        fireEvent.change(sortSelect, { target: { value: 'searchInterest' } });
    });

    const playerCards = getAllByText(/search interest/i);
    within(playerCards[1]).getByText(/100/i);
    within(playerCards[2]).getByText(/99/i);
    within(playerCards[3]).getByText(/18/i);
    within(playerCards[4]).getByText(/11/i);
    within(playerCards[5]).getByText(/9/i);
});