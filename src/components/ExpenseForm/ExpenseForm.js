import React, { useState } from 'react';
import styles from './ExpenseForm.module.css';

export default function ExpenseForm({expense,setExpense}) {
    const[formData,setFormData] = useState({expensetext:'',expenseAmount:''});
    const handleSubmit = (e)=>{
        e.preventDefault()
        setExpense([{expensetext:formData.expensetext,expenseAmount:formData.expenseAmount,id: new Date().getTime()},...expense]);
        setFormData({expensetext:'',expenseAmount:''});
    }
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                {/* Change text to Edit Transaction if an expense is to be updated */}
                <h3>Add new transaction</h3>
                <label htmlFor="expenseText">Text</label>
                <input id="expenseText" className={styles.input} type="text" placeholder="Enter text..." required onChange={(e)=>setFormData({expensetext:e.target.value,expenseAmount:formData.expenseAmount})} value={formData.expensetext}/>
                <div>
                    <label htmlFor="expenseAmount" style={{textAlign:'left'}}>Amount</label>
                    <div>(negative - expense,positive-income)</div>
                </div>
                <input className={styles.input} id="expenseAmount" type="number" placeholder="Enter amount..." required onChange={(e)=>setFormData({expensetext:formData.expensetext,expenseAmount:e.target.value})} value={formData.expenseAmount}/>
                <button className={styles.submitBtn}>
                    {/* Change text to Edit Transaction if an expense is to be updated */}
                    Add Transaction
                </button>
            </form>
        </>
    );
};
