import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./Expenses.js";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__descirption">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
