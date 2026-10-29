import './BoxEditor.css';

export function BoxEditor() {
    return (
        <div className="box-editor">
            <h3>Box Editor</h3>
            <button>Info</button>
            <form className="form-box-editor">
                <div className="rgb-colors">
                    <div className="red-color-input">
                        <label htmlFor="editor-red">R:</label>
                        <input type="number" id="editor-red" name="red" min="0" max="255"></input>
                    </div>
                    <div className="green-color-input">
                        <label htmlFor="editor-green">G:</label>
                        <input type="number" id="editor-green" name="green" min="0" max="255"></input>
                    </div>
                    <div className="blue-color-input">
                        <label htmlFor="editor-blue">B:</label>
                        <input type="number" id="editor-blue" name="blue" min="0" max="255"></input>
                    </div>
                </div>

                <p>Box number : 1</p>
                <div className="rectangle">Box color</div>

                <div className="form-submit-buttons">
                    <button type="submit">Apply Color</button>
                </div>
            </form>
        </div>
    )
}