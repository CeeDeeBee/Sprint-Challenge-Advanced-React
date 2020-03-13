import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        const body = document.querySelector("body");
        isDarkMode
            ? body.classList.add("dark-mode")
            : body.classList.remove("dark-mode")
    }, [isDarkMode]);

    return [isDarkMode, setIsDarkMode];
}