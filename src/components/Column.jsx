import React from 'react';
import cl from './Column.module.css';
import chroma from "chroma-js";

function Column({id, color, isLocked, setColumnColor, setAllColumnColor, lockToggle}) {

    let checkColorLuminance = (color) => {
        const luminance = chroma(color).luminance();
        return luminance > 0.5 ? 'black' : 'white';
    }

    return (
    <div className={cl.column} style={{color: checkColorLuminance(color), backgroundColor: color}}>
        <h2 className={cl.colorTitle} onClick={() => setColumnColor(id)}>
            {color}
        </h2>
        <h3 className={cl.colorAllTitle} onClick={() => setAllColumnColor(id)}>
            <i class="fa-sharp fa-solid fa-rotate-right fa-2x"></i>
        </h3>
        <button className={cl.lockButton} onClick={() => lockToggle(id)}>
            {
                isLocked ? <i class="fa-sharp fa-solid fa-lock fa-4x" style={{color: checkColorLuminance(color)}}></i> : <i class="fa-sharp fa-solid fa-lock-open fa-4x" style={{color: checkColorLuminance(color)}}></i>
            }
        </button>
    </div>
    );
}

export default Column;