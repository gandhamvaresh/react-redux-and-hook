import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import * as depositActions from './../actions/balenceActions'

function Deposit(){
 const balance = useSelector(state => state.balenceReducer.balance)
 const loading = useSelector(state => state.balenceReducer.loading);
 const loan = useSelector(state => state.loanReducer.loan);


 const dispatch= useDispatch()

  function depositHandle(){
    dispatch(depositActions.depositAsync())
  }

return <> Deposit 
{loading ? <h1>saving.....</h1> : <h1>Balance: {balance}</h1>}
<h2>{loan? "loan Already Applied": "loan needed"}</h2>
<button onClick={depositHandle}> Deposit </button>
</>
}
export default Deposit;