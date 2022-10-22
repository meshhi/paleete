import React from 'react';
import cl from './ColumnLists.module.css';
import Column from './Column';

function ColumnList({columns, setColumnColor, setAllColumnColor, lockToggle}) {
    return (
    <main className={cl.columns}>
        {
            columns.map((column)=> <Column key={column.id} id={column.id} color={column.color} isLocked={column.isLocked} setColumnColor={setColumnColor} setAllColumnColor={setAllColumnColor} lockToggle={lockToggle}/>)
        }
     </main>
  );
}

export default ColumnList;