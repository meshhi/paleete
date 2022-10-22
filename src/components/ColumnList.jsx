import React from 'react';
import cl from './ColumnLists.module.css';
import Column from './Column';

function ColumnList() {
    return (
    <main className={cl.columns}>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
     </main>
  );
}

export default ColumnList;