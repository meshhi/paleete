import React from 'react';
import cl from './Column.module.css';

function Column({id, color, isLocked, setColumnColor}) {
    return (
    <div className={cl.column} style={{backgroundColor: color}}>
        <button onClick={() => setColumnColor(id)}>
            <h2>
                {color}
            </h2>
        </button>
        <button>Locked: {String(isLocked)}</button>
    </div>
    );
}

export default Column;