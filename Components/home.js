import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function Home(){
  const balance = useSelector(state => state.balenceReducer.balance)
  const loan = useSelector(state => state.loanReducer.loan)

 const dispatch= useDispatch()

  function loanHandle(){
    dispatch({type: 'APPLY'})
  }


return <> Home page
<br />
<h2> balence is : {balance}</h2>
<button   disabled={loan? true : false}
  onClick={loanHandle}>{loan ?"loan Aplied" : "loan Needed"}  </button>

   <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
</>
}
export default Home;