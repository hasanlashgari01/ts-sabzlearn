import { createContext } from "react";
import themes from "./Theme";

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext(themes);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
