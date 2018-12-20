import React from 'react';
import './addExpenses.css';

export default class AddExpenses extends React.Component{

  render(){
    return(
        <div className="addContainer">
        <div className="leftSideWindow">Left</div>
        <div className="rightSideWindow">Right</div>
        <div className="configurationWindow">Config</div>
        <div className="additionWindow">Add</div>
        <div className="tableWindow">Table</div>
        </div>
    )
  }

}