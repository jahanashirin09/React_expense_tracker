import React from 'react'
import './TransactionCell.css'

export default function TransactionCell(props) {
  return (
    <div className='cell' isExpense={props.payload?.type==='EXPENSE'}  >
        <span>{props.payload.desc}</span>
        <span>${props.payload.amount}</span>

    </div>
  )
}
