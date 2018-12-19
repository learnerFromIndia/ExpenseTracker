import React from 'react';
import './expenseTracker.css';
import {BrowserRouter as Router,NavLink,Route,Redirect} from 'react-router-dom';
import AddExpenses from '../AddExpenses/addExpenses';
import ViewExpenses from '../ViewExpenses/viewExpenses';

export default class ExpenseTracker extends React.Component{

    render(){
        return (
          <Router>
           <div className="expenseContainer">
              <div className="header">
                  <div><p class="title">Expense Tracker</p></div>
                  <div className="link"><NavLink activeClassName="linkActive" to="/Add">Add</NavLink></div>
                  <div className="link"><NavLink activeClassName="linkActive" to="/View">View</NavLink></div> 
              </div>
              <div class="mainView">
                  <Route path= "/" render={()=><Redirect to="/Add"/>}/>
                  <Route path="/Add" exact component={AddExpenses}/>
                  <Route path="/View" exact component={ViewExpenses}/>
              </div>
           </div>
          </Router>
        );
    }
}


