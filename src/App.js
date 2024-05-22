import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense'
import ExpensesFilter from './components/ExpenseFilter'
import {useState} from 'react'
const dummy = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];
function App() {
  const [expenses,setExpenses]=useState(dummy);
  const [selected,setSelected]=useState('2022')
  const anoth=(obje)=>{
    setExpenses((prevState)=>{
      return [
        obje,
        ...prevState
        
        
      ]
    })

  }
  const another=(selected)=>{
    setSelected(selected)
  }
  const filtered=expenses.filter((item)=>{
    return selected===item.date.getFullYear().toString()
  })


  return (
    <>
    <NewExpense sen={anoth}/>
    <ExpensesFilter  send={another}/>
    {filtered.map((item)=>{
      return <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
    })}
   
    </>
  );
}

export default App;
