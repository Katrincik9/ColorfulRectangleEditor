import type { BoxData, BoxesState, RGB } from "../types/box"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: BoxesState = {
    boxes: [],
    selectedBoxId: null,
    nextBoxId: 1
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
                    box.rgb = action.payload.rgb
                }
            })
        },

        selectBox: (state, action: PayloadAction<{ id: string | null }>) => {
            state.selectedBoxId = action.payload.id
        },

        deleteBox: (state) => {
            state.boxes = state.boxes.filter(box => box.id !== state.selectedBoxId)
            state.selectedBoxId = null
        },
    },
})

export const { addBox, updateBoxColor, selectBox, deleteBox } = boxesSlice.actions

export default boxesSlice.reducer
