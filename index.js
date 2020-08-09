import React, { Component } from 'react';
import { render } from 'react-dom';
import HelloAPP from './Components/App';
import './style.css';

import { createStore,combineReducers, applyMiddleware } from "redux";
import balenceReducer from "./store/balenceReducer";
import loanReducer from "./store/loanReducer";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';



const store =  createStore(combineReducers({balenceReducer, loanReducer}), applyMiddleware(thunk))

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HelloAPP />
      </div>
    );
  }
}

render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
