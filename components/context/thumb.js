import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ThumbProvider({ children }) {
    const [index, setIndex] = useState(0)
    return (
        <Context.Provider value={[index, setIndex]}>{children}</Context.Provider>
    );
}

export function useThumbContext() {
    return useContext(Context);
}