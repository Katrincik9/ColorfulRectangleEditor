import type { BoxData, RGB } from "../types/box"

export type BoxesAction =
    | ReturnType<typeof addBox>
    | ReturnType<typeof updateBoxColor>
    
export const addBox = (box: BoxData) => ({
    type: "add_box" as const,
    payload: box
})

export const updateBoxColor = (id: string, rgb: RGB) => ({
    type: "update_box_color" as const,
    payload: {
        id: id,
        rgb: rgb
    }
})