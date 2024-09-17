import React from 'react'
import './ExpenseContainer.css'

export default function ExpenseContainer(props) {
  return (
    <div className='expense-cointainer'>
        <div className='expense-box'>
            Expense
            <span className='expense-color'>${props.expense}</span>
        </div>
        <div className='income-box'>
            Income
            <span className='income-color'>${props.income}</span>
        </div>
    </div>
  )
}
