import { useAppSelector } from '../hooks/hooks';
import type { RGB } from '../types/box';
import './BoxList.css';

export function BoxList() {
    const boxes = useAppSelector(state => state.boxes);
    return (
        <>
            <h3>Box List</h3>
            <div className="box-list">
                {boxes.map(box => <BoxItem key={box.id} color={box.rgb}></BoxItem>)}
            </div>
        </>
    )
}

export function BoxItem({ color }: { color: RGB }) {
    return (
        <button className="box-item" style={{ background: `rgb(${color.red}, ${color.green}, ${color.blue})` }}></button>
    )
}