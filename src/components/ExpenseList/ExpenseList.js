import React from 'react';
import styles from './ExpenseList.module.css';
import Transaction from '../Transactions/Transaction';

export default function ExpenseList({expense}) {
    return (
        <>
            <div className={styles.expenseListContainer}>
                <h3>Transactions</h3>
                <ul className={styles.transactionList}>
                    {expense.map((expense, i) => {
                        return (
                            <Transaction
                                index={i}
                                key={expense.id}
                                expense={expense}
                                
                            />
                        );
                    })}
                </ul>
            </div>
        </>
    )
}
