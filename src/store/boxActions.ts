import type { BoxData, RGB } from "../types/box"

export type BoxesAction =
    | ReturnType<typeof addBox>
    | ReturnType<typeof updateBoxColor>
    | ReturnType<typeof selectBox>
    | ReturnType<typeof deleteBox>

export const addBox = (box: Omit<BoxData, "id">) => ({
    type: "add_box",
    payload: box
} as const)

export const updateBoxColor = (rgb: RGB) => ({
    type: "update_box_color",
    payload: {
        rgb: rgb
    }
} as const)

export const selectBox = (id: string | null) => ({
    type: "select_box",
    payload: {
        id: id
    }
} as const )

export const deleteBox = (id: string | null) => ({
    type: "delete_box",
    payload: {
        id: id
    }
} as const)