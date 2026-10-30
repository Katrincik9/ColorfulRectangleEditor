import { useForm } from 'react-hook-form';
import './BoxEditor.css';
import type { RGB } from '../types/box';
import { useBoxContext } from '../context/boxContext';

export function BoxEditor() {
    const { register, handleSubmit } = useForm<RGB>();
    const { selectedBox } = useBoxContext();

    function onSubmit() {

    }

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

                <p>Box number : 1</p>
                <div className="rectangle"
                    style={{
                        backgroundColor: selectedBox
                            ? `rgb(${selectedBox.rgb.red}, ${selectedBox.rgb.green}, ${selectedBox.rgb.blue})`
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