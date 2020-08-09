import React from 'react';
import Withdraw from './withdraw'
import Depposit from './deposit'
import Home from './home'
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";


function App(){
  return <> APP
    <BrowserRouter> 
    <ul className='ul-style'>
        <li className='li-style'><NavLink to='/' exact className='link-style' >Home</NavLink> </li>
        <li className='li-style'> <NavLink to='/deposit' exact className='link-style'>Depposit</NavLink> </li>
        <li className='li-style'><NavLink to='/withdraw' exact className='link-style'>Withdraw</NavLink>  </li>
     </ul>
     <Route path='/' exact component={Home}/>
     <Route path='/deposit' exact component={Depposit}/>
     <Route path='/withdraw' exact component={Withdraw}/>
    </BrowserRouter>
  </>
}

export default App;
