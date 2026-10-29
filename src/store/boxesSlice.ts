import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { BoxData } from "../types/box"

const initialState: BoxData[] = []

export const boxesSlice = createSlice({
    name: "boxes",
    initialState,
    reducers: {
        addBox: (state, action: PayloadAction<BoxData>) => {
            if (state.length < 9) {
                state.push(action.payload)
            }
        },
        updateBoxColor: (state, action: PayloadAction<BoxData>) => {
            const selectedBox = state.find(box => box.id === action.payload.id)
            if (!selectedBox) return
            selectedBox.rgb = action.payload.rgb
        }
    }
})

export const { addBox, updateBoxColor } = boxesSlice.actions