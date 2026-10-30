import type { BoxData } from "./box";

export interface BoxContextData {
    selectedBox : BoxData | null,
    setSelectedBox: (box: BoxData | null) => void
}