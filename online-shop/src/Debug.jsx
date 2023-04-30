import React, { useContext } from 'react';
import { HistoryContext } from "./context";

function DebugWindow() {

    const { history } = useContext(HistoryContext);

    return (
        <div className="debug-window">
            <h3>History</h3>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DebugWindow;
