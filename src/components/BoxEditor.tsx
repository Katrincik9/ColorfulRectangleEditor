import { useForm, useWatch } from 'react-hook-form';
import './BoxEditor.css';
import './Box.css';
import type { RGB } from '../types/box';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useEffect } from 'react';
import { deleteBox, undoColorChange, updateBoxColor } from '../store/boxesReducer';

export function BoxEditor() {
    const { register, handleSubmit, reset, control, formState: { errors, isDirty, isValid } } = useForm<RGB>({ mode : "onChange"});
    const watchedRGB = useWatch({ control })
    const dispatch = useAppDispatch();
    const selectedBoxId = useAppSelector(state => state.boxesReducer.selectedBoxId);
    const selectedBox = useAppSelector(state => state.boxesReducer.boxes.find(box => box.id === selectedBoxId))
    const boxes = useAppSelector(state => state.boxesReducer.boxes);
    const selectedBoxIndex = boxes.findIndex(box => box.id === selectedBoxId);
    const boxNr = selectedBoxIndex === -1 ? null : selectedBoxIndex + 1;
    const lastColorChange = useAppSelector(state => state.boxesReducer.colorChangeHistory);

    function onSubmit(data: RGB) {
        if (!selectedBoxId) return
        dispatch(updateBoxColor({ rgb: data}));
    }

    useEffect(() => {
        if (selectedBox) {
            reset(selectedBox.rgb);
        } else {
            reset({
                red: "",
                green: "",
                blue: ""
            })
        }
    }, [selectedBox, reset])

    return (
        <div className="box-editor">
            <h4>Box Editor</h4>
            <button className="info-btn" command="show-modal" commandFor="info" disabled={!selectedBoxId}>Info</button>

            <dialog id="info">
                <h3>Box info:</h3>
                <div className="rectangle"
                    style={{
                        backgroundColor: selectedBox
                            ? `rgb(${selectedBox.rgb.red}, ${selectedBox.rgb.green}, ${selectedBox.rgb.blue})`
                            : 'transparent',
                    }}
                />
                <span>R: {selectedBox?.rgb.red} </span>
                <span>G: {selectedBox?.rgb.green} </span>
                <span>B: {selectedBox?.rgb.blue}</span>
                <p>Box number: {boxNr}</p>
                <p>Box id: {selectedBox?.id}</p>
                <p>Creation time: {selectedBox ? new Date(selectedBox.timestamp).toLocaleString() : ""}</p>                <button className="close-info-btn" command="close" commandFor="info">Close</button>
            </dialog>

            <form className="form-box-editor" onSubmit={handleSubmit(onSubmit)}>
                <div className="rgb-colors">
                    <div className="red-color-input">
                        <label htmlFor="editor-red">R:</label>
                        <input className={errors.red ? "invalid" : ''} type="number" id="editor-red" {...register("red", { required: true, valueAsNumber: true, min: 0, max: 255 })} ></input>
                    </div>
                    <div className="green-color-input">
                        <label htmlFor="editor-green">G:</label>
                        <input className={errors.green ? "invalid" : ''} type="number" id="editor-green" {...register("green", { required: true, valueAsNumber: true, min: 0, max: 255 })}></input>
                    </div>
                    <div className="blue-color-input">
                        <label htmlFor="editor-blue">B:</label>
                        <input className={errors.blue ? "invalid" : ''} type="number" id="editor-blue" {...register("blue", { required: true, valueAsNumber: true, min: 0, max: 255 })}></input>
                    </div>
                </div>

                <p>Box number: {boxNr}</p>
                <div className="rectangle"
                    style={{
                        backgroundColor: selectedBox && watchedRGB
                            ? `rgb(${watchedRGB.red}, ${watchedRGB.green}, ${watchedRGB.blue})`
                            : 'transparent',
                    }}
                />

                <div className="form-submit-buttons edit-buttons">
                    <button type="submit" disabled={!isDirty || selectedBoxId === null || !isValid}>Apply Color</button>
                    <button type="button" disabled={!isDirty} onClick={() => reset()}>Cancel Changes</button>
                    <button type="button" disabled={lastColorChange.length === 0} onClick={() => dispatch(undoColorChange())}>Undo Changes</button>
                    <button type="button" disabled={selectedBoxId === null} onClick={() => dispatch(deleteBox())}>Delete box</button>
                </div>
            </form>
        </div>
    )
}