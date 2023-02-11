import React from "react";
import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleShow(false);
  };

  const [show , toggleShow] = useState(false);

  const showForm = () => {
    toggleShow(true);
  };

  const hideForm = () => {
    toggleShow(false);
  };
  
  return (
    <div className="new-expense">
      {!show && <button onClick={showForm}>Add new expense</button>}
      {show && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
