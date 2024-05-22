import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
function NewExpense(props){
    const func=(another)=>{
        const ne={
            ...another,
            id:Math.random().toString()
        }
        
        props.sen(ne)

    }

    
    return (
        <div className='new-expense'>
            <ExpenseForm send={func}/>
            
        </div>
    )
}
export default NewExpense