import React, { useState } from 'react'
import './AddTransactionView.css'

export default function AddTransactionView(props) {
  const [amount,setAmount]=useState();
  const [desc,setDesc]=useState();
  const [type,setType]=useState('EXPENSE');
  const addTransaction=()=>{
    props.addTransaction({amount:Number(amount),desc,type,id:Date.now()})
    console.log({amount,desc,type});
    props.toggleAddTxn();

  }
  return (
    <div className='addTransactionContainer'>
        <input 
        className='input-amount' 
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        />
        <input  
        className='input-description' 
        placeholder='Description'
        value={desc}
        onChange={(e)=>setDesc(e.target.value)}/>
        <div className='radio-btn-box'>
            <input 
            type='radio' 
            id='expense'
            name='type' 
            value='EXPENSE'
            checked={type==='EXPENSE'}
            onChange={(e)=>setType(e.target.value)}/>
            <label>Expenses</label>
            <input 
            type='radio' 
            id='income' 
            name='type' 
            value='INCOME'
            checked={type==='INCOME'}
            onChange={(e)=>setType(e.target.value)}/>
            <label>Income</label>
        </div>
        <button className='addTransactionBtn' onClick={addTransaction}>Add Transaction</button>
    </div>
  )
}