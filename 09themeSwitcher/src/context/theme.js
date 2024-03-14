import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

//Provider Component to wrap our App and provide the context for all child components.

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext);
}