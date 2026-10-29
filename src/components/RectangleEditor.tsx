import { BoxEditor } from "./BoxEditor";
import { BoxInserter } from "./BoxInserter";
import { BoxList } from "./BoxList";
import './RectangleEditor.css';

export function RectangleEditor() {
    return (
        <div className="rectangle-editor">
            <h1>Colorful Rectangles Editor</h1>
            <div className="box-form">
                <BoxInserter />
                <BoxEditor />
            </div>
            <BoxList />
        </div>
    )
}