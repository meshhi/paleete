import './MainContent.css';
import React, { Component, useState } from 'react';
import ColumnList from './components/ColumnList';

function MainContent() {

  let generateRandomColor = () => {
    let color = '';
    let hexString = '1234567890ABCDEF'
    for(let i = 0; i < 6; i++){
        color += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return `#${color}`
  }

  let createColumn = () => {
    let id = Date.now() * Math.floor(Math.random() * 1000);
    let color = generateRandomColor();
    let isLocked = false;

    return {id: id, color: color, isLocked: isLocked}
  }

  let columnList = [createColumn(), createColumn(), createColumn(), createColumn(), createColumn()];
  let [columns, setColumns] = useState(columnList);

  let setColumnColor = (id) => {
    let updatedColumns = [...columns];
    for(let i = 0; i < updatedColumns.length; i++){
      if ((updatedColumns[i].id === id) && (!updatedColumns[i].isLocked)){
        updatedColumns[i].color = generateRandomColor();
      }
    }
    setColumns(updatedColumns);
  }

  let lockToggle = (id) => {
    let updatedColumns = [...columns];
    for(let i = 0; i < updatedColumns.length; i++){
      if (updatedColumns[i].id === id){
        updatedColumns[i].isLocked = !updatedColumns[i].isLocked;
      }
    }
    setColumns(updatedColumns);
  }

  return (
    <div className="main-content">
      <ColumnList columns={columns} setColumnColor={setColumnColor} lockToggle={lockToggle}/>
    </div>
  );
}

export default MainContent;
