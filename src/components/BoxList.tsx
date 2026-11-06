import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { selectBox } from '../store/boxesReducer';
import type { RGB } from '../types/box';
import './BoxList.css';

export function BoxList() {
    const boxes = useAppSelector(state => state.boxesReducer.boxes);
    const dispatch = useAppDispatch();
    const selectedBoxId = useAppSelector(state => state.boxesReducer.selectedBoxId);

    return (
        <>
            <h4>Box List</h4>
            <div className="box-list">
                {boxes.map(box => <BoxItem key={box.id} color={box.rgb} selected={box.id === selectedBoxId} onSelect={() => dispatch(selectBox({id: box.id}))}></BoxItem>)}
            </div>
        </>
    )
}

export function BoxItem({ color, onSelect, selected }: { color: RGB, onSelect(): void, selected: boolean }) {
    return (
        <button className={`box-item ${selected ? "selected" : ""}`} style={{ background: `rgb(${color.red}, ${color.green}, ${color.blue})` }
        } onClick={onSelect} ></button >
    )
}