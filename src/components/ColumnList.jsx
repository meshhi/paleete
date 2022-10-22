import React from 'react';
import cl from './ColumnLists.module.css';
import Column from './Column';

function ColumnList({columns, setColumnColor}) {
    return (
    <main className={cl.columns}>
        {
            columns.map((column)=> <Column key={column.id} id={column.id} color={column.color} isLocked={column.isLocked} setColumnColor={setColumnColor}/>)
        }
     </main>
  );
}

export default ColumnList;