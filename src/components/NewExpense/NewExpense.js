import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [formHidden, setFormHidden] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setFormHidden(true);
  };

  const showFormHandler = () => {
    setFormHidden(false);
  };

  const hideFormHandler = () => {
    setFormHidden(true);
  };

  return (
    <div className="new-expense">
      {formHidden && <button onClick={showFormHandler}>Add new expense</button>}
      {!formHidden && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCansel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
