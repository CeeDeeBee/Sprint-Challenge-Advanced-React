import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedData, setStoredData] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setData = data => {
        setStoredData(data);
        localStorage.setItem(key, JSON.stringify(data));
    }

    return [storedData, setData];
}