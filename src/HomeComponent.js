import React, { useEffect, useState } from 'react'
import './HomeComponent.css'
import OverviewComponent from './Component/OverviewComponent'
import TransactionComponent from './Component/TransactionComponent'

export default function HomeComponent() {
  const [Transaction,setUpdateTransaction]=useState([]);
  const[expense,updateExpense]=useState(0);
  const[income,updateIncome]=useState(0);
  


  const addTransaction=(payload)=>{
    const TransactionArray=[...Transaction]
    TransactionArray.push(payload)
    setUpdateTransaction(TransactionArray)

  }
  const totalBalance=()=>{
    let expense=0;
    let income=0;
    Transaction.map((payload)=>{
      payload.type==="EXPENSE"?expense=expense+payload.amount:income=income+payload.amount;
    });
    updateExpense(expense)
    updateIncome(income)
    
  
  }
  useEffect(()=>totalBalance(),[Transaction])
  return (
    <div className='home-container-component'>
        <OverviewComponent addTransaction={addTransaction} expense={expense} income={income}/>
        <TransactionComponent Transaction={Transaction} />
    </div>
  )
}
