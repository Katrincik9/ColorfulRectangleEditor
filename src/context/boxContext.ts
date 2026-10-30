import { createContext, useContext } from "react";
import type { BoxContextData } from "../types/boxContextData";

export const BoxContext = createContext<BoxContextData | null>(null);

export function useBoxContext() : BoxContextData {
    const boxContext = useContext(BoxContext);
    if (boxContext === null) {
        throw new Error("No saved game context");
    }
    return boxContext;
}