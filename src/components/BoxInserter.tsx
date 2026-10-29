import './BoxInserter.css';

export function BoxInserter() {
    return (
        <div className="box-inserter">
            <h3>Box Inserter</h3>
            <form className="form-box-inserter">
                <div className="rgb-colors">
                    <div className="red-color-input">
                        <label htmlFor="inserter-red">R:</label>
                        <input type="number" id="inserter-red" name="red" min="0" max="255"></input>
                    </div>
                    <div className="green-color-input">
                        <label htmlFor="inserter-green">G:</label>
                        <input type="number" id="inserter-green" name="green" min="0" max="255"></input>
                    </div>
                    <div className="blue-color-input">
                        <label htmlFor="inserter-blue">B:</label>
                        <input type="number" id="inserter-blue" name="blue" min="0" max="255"></input>
                    </div>
                </div>

                <div className="form-submit-buttons">
                    <button type="submit">Insert</button>
                    <button type="submit">Insert Random</button>
                </div>
            </form>
        </div>
    )
}