import React, { useEffect, useState } from 'react'
import './HomeComponent.css'
import OverviewComponent from './Component/OverviewComponent'
import TransactionComponent from './Component/TransactionComponent'

export default function HomeComponent() {
  const [transaction,setUpdateTransaction]=useState([]);
  const[expense,updateExpense]=useState(0);
  const[income,updateIncome]=useState(0);
  


  const addTransaction=(payload)=>{
    setUpdateTransaction((prevTransactions)=>
      [...prevTransactions,payload]
    )
  }
  const totalBalance=()=>{
    let expense=0;
    let income=0;
    transaction.map((payload)=>{
      payload.type==="EXPENSE"?expense=expense+payload.amount:income=income+payload.amount;
    });
    updateExpense(expense)
    updateIncome(income)
    
  
  }
  useEffect(()=>totalBalance(),[transaction])
  return (
    <div className='home-container-component'>
        <OverviewComponent addTransaction={addTransaction} expense={expense} income={income}/>
        <TransactionComponent transaction={transaction} />
    </div>
  )
}
