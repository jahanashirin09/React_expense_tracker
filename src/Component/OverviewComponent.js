import React, { useState } from 'react'
import './OverviewComponent.css'
import AddTransactionView from './AddTransactionView';
import ExpenseContainer from './ExpenseContainer';

export default function OverviewComponent({income,expense,addTransaction}) {

  const[isAddTxnVisible,toggleAddTxn]=useState(true);
  return (
    <div className='OverviewComponent-main-component'>
      <div className='balance-box'>
        Balance:${income-expense}
        <div className='add-button-container'>
          <button className='add-button' onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible?'Cancel' :'ADD'}

          </button>
        </div>
      </div>
        {isAddTxnVisible && <AddTransactionView 
        toggleAddTxn={toggleAddTxn}
        addTransaction={addTransaction}
        
         />}
        <ExpenseContainer  
        income={income}
        expense={expense}/>
    </div>
  )
}
