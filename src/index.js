import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import ShowSummary from './ShowSummary';
import ShowList from './ShowList';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route exact path='/' component={App}/>
  <Route exact path='/summary' component={ShowSummary}/>
  <Route exact path='/show' component={ShowList}/>
  <App/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);