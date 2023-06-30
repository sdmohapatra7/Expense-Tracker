import React,{useState} from 'react';
import styles from '../Transactions/Transaction.module.css';

export default function Transaction({expense,index}) {
    const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
    return (
        <li
            key={expense.id}
            className={`${styles.transaction} ${expense.amount > 0 ? styles.profit : styles.loss}`}
            onMouseOver={() => {
                setCurrentHoverIndex(index);
            }}
            onMouseLeave={() => {
                setCurrentHoverIndex(null);
            }}
        >
            <div>{expense.expensetext}</div>
            <div className={styles.transactionOptions}>
                <div className={`${styles.amount} ${currentHoverIndex === index && styles.movePrice}`}>
                    ${expense.expenseAmount}
                </div>
                <div className={`${styles.btnContainer} ${currentHoverIndex === index && styles.active}`}>
                    <div className={styles.edit} onClick={() => { }}>
                        <img src='https://cdn-icons-png.flaticon.com/128/2921/2921222.png' height="100%" alt="Edit" />
                    </div>
                    <div className={styles.delete} onClick={() => {}}>
                        <img src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' height="100%" alt="Delete" />
                    </div>
                </div>
            </div>
        </li>
    );
};
