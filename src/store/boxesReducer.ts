import type { BoxesState } from "../types/box"
import type { BoxesAction } from "./boxActions"

const initialState: BoxesState = {
    boxes: [],
    selectedBoxId: null
}

export function boxesReducer(state = initialState, action: BoxesAction) {
    if (action.type === "add_box") {
        if (state.boxes.length < 9) {
            return {
                ...state,
                boxes: [
                    ...state.boxes,
                    action.payload
                ]
            }
        }
    }

    if (action.type === "update_box_color") {
        return {
            ...state,
            boxes: state.boxes.map(box => {
                if (box.id === action.payload.id) {
                    const updatedBox = { ...box }
                    updatedBox.rgb = action.payload.rgb
                    return updatedBox
                }
                return box
            })
        }
    }

    if (action.type === "select_box") {
        return {
            ...state,
            selectedBoxId: action.payload.id
        }
    }

    return state
}