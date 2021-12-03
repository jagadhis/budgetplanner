import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1234567, name: "Shopping", cost: 100 },
    { id: 1234567, name: "Holiday", cost: 160 },
    { id: 1234567, name: "Food", cost: 140 },
    { id: 1234567, name: "Vacation", cost: 1000 },
    { id: 1234567, name: "Insurance", cost: 200 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.cost}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
