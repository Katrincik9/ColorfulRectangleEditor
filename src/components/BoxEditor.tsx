import { useForm, useWatch } from 'react-hook-form';
import './BoxEditor.css';
import type { RGB } from '../types/box';
import { updateBoxColor } from '../store/boxActions';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useEffect } from 'react';

export function BoxEditor() {
    const { register, handleSubmit, reset, control } = useForm<RGB>();
    const watchedRGB = useWatch({ control })
    const dispatch = useAppDispatch();
    const selectedBoxId = useAppSelector(state => state.boxesReducer.selectedBoxId);
    const selectedBox = useAppSelector(state => state.boxesReducer.boxes.find(box => box.id === selectedBoxId))
    const boxNr = selectedBoxId?.split("-")[1];

    function onSubmit(data: RGB) {
        if (!selectedBoxId) return
        dispatch(updateBoxColor(selectedBoxId, data));
    }

    useEffect(() => {
        reset(selectedBox?.rgb);
    }, [selectedBox, reset])

    return (
        <div className="box-editor">
            <h3>Box Editor</h3>
            <button>Info</button>
            <form className="form-box-editor" onSubmit={handleSubmit(onSubmit)}>
                <div className="rgb-colors">
                    <div className="red-color-input">
                        <label htmlFor="editor-red">R:</label>
                        <input type="number" id="editor-red" {...register("red", { required: true, valueAsNumber: true, min: 0, max: 255 })} ></input>
                    </div>
                    <div className="green-color-input">
                        <label htmlFor="editor-green">G:</label>
                        <input type="number" id="editor-green" {...register("green", { required: true, valueAsNumber: true, min: 0, max: 255 })}></input>
                    </div>
                    <div className="blue-color-input">
                        <label htmlFor="editor-blue">B:</label>
                        <input type="number" id="editor-blue" {...register("blue", { required: true, valueAsNumber: true, min: 0, max: 255 })}></input>
                    </div>
                </div>

                <p>Box number : {boxNr}</p>
                <div className="rectangle"
                    style={{
                        backgroundColor: watchedRGB
                            ? `rgb(${watchedRGB.red}, ${watchedRGB.green}, ${watchedRGB.blue})`
                            : 'transparent',
                    }}
                />

                <div className="form-submit-buttons">
                    <button type="submit">Apply Color</button>
                </div>
            </form>
        </div>
    )
}