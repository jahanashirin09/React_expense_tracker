import React, { useEffect, useState } from 'react'
import './TransactionComponent.css'
import TransactionCell from './TransactionCell'

export default function TransactionComponent(props) {
  const[searchText,updateSearchText]=useState("")
  const[filteredTransaction,updatetxn]=useState(props.Transaction)
  const filterData=(searchText)=>{
    if(!searchText||!searchText.trim().length){
      updatetxn(props.Transaction)
      return;
    }
    let txn=[...props.Transaction];
    txn=txn.filter((payload)=>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updatetxn(txn)
  }
  useEffect(()=>filterData(searchText),[props.Transaction])
  return (
    <div className='transaction-main-container'>
      Transaction
      <input 
      placeholder='search' 
      className='search-input'
      value={searchText}
      onChange={(e)=>{
        updateSearchText(e.target.value);
        filterData(e.target.value)
      }}/>
      {filteredTransaction?.length?
      filteredTransaction.map((payload)=>(<TransactionCell payload={payload}/>)):""}
    </div>
  )
}
