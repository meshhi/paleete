import React from 'react';
import cl from './Column.module.css';

function Column({id, color, isLocked, setColumnColor, lockToggle}) {
    return (
    <div className={cl.column} style={{backgroundColor: color}}>
            <h2 className={cl.colorTitle} onClick={() => setColumnColor(id)}>
                {color}
            </h2>
        <button className={cl.lockButton} onClick={() => lockToggle(id)}>
            {
                isLocked ? <i class="fa-sharp fa-solid fa-lock fa-4x"></i> : <i class="fa-sharp fa-solid fa-lock-open fa-4x"></i>
            }
        </button>

    </div>
    );
}

export default Column;