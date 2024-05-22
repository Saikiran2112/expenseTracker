import './ExpenseForm.css'
import {useState} from 'react'
function ExpenseForm(props){
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const[date,setDate]=useState('')
    const titleChange=(event)=>{
        setTitle(event.target.value)
    }
    const amountChange=(event)=>{
        setAmount(event.target.value)
    }
    const dateChange=(event)=>{
        setDate(event.target.value)
    }
    const handler=(event)=>{
          event.preventDefault()
          const expenses={
            title:title,
            amount:amount,
            date:new Date(date)
          }
          props.send(expenses)
          setTitle('')
          setAmount('')
          setDate('')
          
    }

    

   
    return (
        <form onSubmit={handler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' value={amount} step='0.01' onChange={amountChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={date} max='2023-01-01' onChange={dateChange}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    );
}
export default ExpenseForm