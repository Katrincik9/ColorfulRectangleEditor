import type { BoxData, BoxesState, RGB } from "../types/box"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: BoxesState = {
    boxes: [],
    selectedBoxId: null,
    nextBoxId: 1,
    colorChangeHistory: []
}

export const boxesSlice = createSlice({
    name: "boxes",
    initialState,
    reducers: {
        addBox: (state, action: PayloadAction<Omit<BoxData, "id">>) => {
            if (state.boxes.length < 9) {
                state.boxes.push({
                    ...action.payload,
                    id: `box-${state.nextBoxId}`
                })
                state.nextBoxId += 1
            }
        },

        updateBoxColor: (state, action: PayloadAction<{ rgb: RGB }>) => {
            state.boxes.forEach(box => {
                if (box.id === state.selectedBoxId) {
                    state.colorChangeHistory.push({
                        boxId: box.id,
                        previousRGB: { ...box.rgb }
                    })
                    box.rgb = action.payload.rgb
                }
            })
        },

        selectBox: (state, action: PayloadAction<{ id: string | null }>) => {
            state.selectedBoxId = action.payload.id
        },

        deleteBox: (state) => {
            state.boxes = state.boxes.filter(box => box.id !== state.selectedBoxId)
            state.colorChangeHistory = state.colorChangeHistory.filter(change => change.boxId !== state.selectedBoxId)
            state.selectedBoxId = null
        },

        undoColorChange: (state) => {
            const change = state.colorChangeHistory[state.colorChangeHistory.length - 1]
            if (!change) return;
            const box = state.boxes.find(box => box.id === change.boxId)
            if (box) {
                box.rgb = change.previousRGB
                state.selectedBoxId = box.id
            }
            state.colorChangeHistory.pop();
        }
    },
})

export const { addBox, updateBoxColor, selectBox, deleteBox, undoColorChange } = boxesSlice.actions

export default boxesSlice.reducer
