import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function Withdraw(){
const balance = useSelector(state => state.balenceReducer.balance)
  const loan = useSelector(state => state.loanReducer.loan)

  const dispatch= useDispatch()

  function withdrawHandle(){
    dispatch({type: 'WITHDRAW', payload: 10})
  }

return <> Withdraw
<h2> deposited balence Is : {balance}</h2> 
<button onClick={withdrawHandle}> Withdraw </button>
<h2>{loan? "loan Already Applied": "loan needed"}</h2>
</>
}
export default Withdraw;

