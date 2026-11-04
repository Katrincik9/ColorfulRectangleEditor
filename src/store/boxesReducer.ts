import type { BoxesState } from "../types/box"
import type { BoxesAction } from "./boxActions"
import { actions } from "./constants"

const initialState: BoxesState = {
    boxes: [],
    selectedBoxId: null
}

export function boxesReducer(state = initialState, action: BoxesAction) {
    if (action.type === actions.add) {
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

    if (action.type === actions.updateBoxColor) {
        return {
            ...state,
            boxes: state.boxes.map(box => {
                if (box.id === state.selectedBoxId) {
                    const updatedBox = { ...box }
                    updatedBox.rgb = action.payload.rgb
                    return updatedBox
                }
                return box
            })
        }
    }

    if (action.type === actions.selectBox) {
        return {
            ...state,
            selectedBoxId: action.payload.id
        }
    }

    return state
}