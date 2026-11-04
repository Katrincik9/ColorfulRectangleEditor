import type { UnknownAction } from "redux"
import type { BoxesState } from "../types/box"
import { type BoxesAction } from "./boxActions"
import { actions } from "./constants"

const initialState: BoxesState = {
    boxes: [],
    selectedBoxId: null,
    nextBoxId: 1
}

function isBoxesAction(action: UnknownAction): action is BoxesAction {
    return Object.values(actions).some(type => type === action.type);
}

export function boxesReducer(state = initialState, action: UnknownAction) {
    if (!isBoxesAction(action)) return state;

    if (action.type === actions.add) {
        if (state.boxes.length < 9) {
            return {
                ...state,
                boxes: [
                    ...state.boxes,
                    {
                        ...action.payload,
                        id: `box-${state.nextBoxId}`
                    }
                ],
                nextBoxId: state.nextBoxId + 1
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

    if (action.type === actions.deleteBox) {
        return {
            ...state,
            boxes: state.boxes.filter(box => box.id !== state.selectedBoxId),
            selectedBoxId: null
        }
    }

    return state
}