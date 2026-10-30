import { useAppDispatch } from '../hooks/hooks';
import { addBox } from '../store/boxActions';
import type { BoxData, RGB } from '../types/box';
import './BoxInserter.css';
import { useForm } from 'react-hook-form';

export function BoxInserter() {
    const { register, handleSubmit, reset } = useForm<RGB>();
    const dispatch = useAppDispatch();

    function onSubmit(data: RGB) {
        const box: BoxData = {
            id: crypto.randomUUID(),
            rgb: data,
            timestamp: new Date().toISOString(),
        };

        dispatch(addBox(box));
        reset();
    }

    return (
        <div className="box-inserter">
            <h3>Box Inserter</h3>
            <form className="form-box-inserter" onSubmit={handleSubmit(onSubmit)}>
                <div className="rgb-colors">
                    <div className="red-color-input">
                        <label htmlFor="inserter-red">R:</label>
                        <input type="number" id="inserter-red" {...register("red", { required: true, valueAsNumber: true, min: 0, max: 255 })} ></input>
                    </div>
                    <div className="green-color-input">
                        <label htmlFor="inserter-green">G:</label>
                        <input type="number" id="inserter-green" {...register("green", { required: true, valueAsNumber: true, min: 0, max: 255 })}></input>
                    </div>
                    <div className="blue-color-input">
                        <label htmlFor="inserter-blue">B:</label>
                        <input type="number" id="inserter-blue" {...register("blue", { required: true, valueAsNumber: true, min: 0, max: 255 })}></input>
                    </div>
                </div>

                <div className="form-submit-buttons">
                    <button type="submit">Insert</button>
                    <button type="button">Insert Random</button>
                </div>
            </form>
        </div>
    )
}