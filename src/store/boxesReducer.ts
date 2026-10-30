import type { BoxData } from "../types/box"
import type { BoxesAction } from "./boxActions"

const initialState: BoxData[] = []

export function boxesReducer(state = initialState, action: BoxesAction) {
    if (action.type === "add_box") {
        if (state.length < 9) {
            return [
                ...state,
                action.payload
            ]
        }
    }

    if (action.type === "update_box_color") {
        return state.map(box => box.id === action.payload.id
            ? {
                ...box,
                rgb: action.payload.rgb
            }
            : box
        )
    }

    return state
}