import './MainContent.css';
import React, { Component } from 'react';
import ColumnList from './components/ColumnList';

function MainContent() {
  return (
    <div className="main-content">
      <ColumnList/>
    </div>
  );
}

export default MainContent;
