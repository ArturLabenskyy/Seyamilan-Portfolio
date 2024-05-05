import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <GlobalContext.Provider
            value={{
                isMenuOpen,
                setIsMenuOpen,
                toggleMenu,
            }}
        >
            {" "}
            {children}{" "}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalContext };
