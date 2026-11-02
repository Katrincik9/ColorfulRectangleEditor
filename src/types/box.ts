export interface BoxData {
    id: string
    rgb : RGB
    timestamp: string
}

export interface RGB {
    red: number
    green: number
    blue: number
}

export interface BoxesState {
    boxes: BoxData[],
    selectedBoxId: string | null
}