import { createContext, useContext, useState,  } from "react";

const Context = createContext();

export function ThumbProvider({ children }) {
    const [index, setIndex] = useState(0)
    const [trackUri, setTrackUri] = useState('')
    const [allTrack, setAllTrack] = useState({})
    return (
        <Context.Provider value={{index, setIndex, trackUri, setTrackUri, allTrack, setAllTrack}}>{children}</Context.Provider>
    );
}

export function useThumbContext() {
    return useContext(Context);
}