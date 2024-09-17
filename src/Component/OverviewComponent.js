import React, { useState } from 'react'
import './OverviewComponent.css'
import AddTransactionView from './AddTransactionView';
import ExpenseContainer from './ExpenseContainer';

export default function OverviewComponent(props) {

  const[isAddTxnVisible,toggleAddTxn]=useState(true);
  return (
    <div className='OverviewComponent-main-component'>
      <div className='balance-box'>
        Balance:${props.income-props.expense}
        <div className='add-button-container'>
          <button className='add-button' onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible?'Cancel' :'ADD'}

          </button>
        </div>
      </div>
        {isAddTxnVisible && <AddTransactionView 
        toggleAddTxn={toggleAddTxn}
        addTransaction={props.addTransaction}
        
         />}
        <ExpenseContainer  
        income={props.income}
        expense={props.expense}/>
    </div>
  )
}
