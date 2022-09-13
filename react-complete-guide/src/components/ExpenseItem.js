import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpensePrice from './ExpenseAmount';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <ExpensePrice amount={props.amount} />
            </div>
        </div>    
    )
}

export default ExpenseItem;