import React from 'react';
import T from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  const orders = transactions.map(order => (
    <tr key={order.id}>
      <td className={styles.transactionorders}>{order.type}</td>
      <td className={styles.transactionorders}>{order.amount}</td>
      <td className={styles.transactionorders}>{order.currency}</td>
    </tr>
  ));

  return (
    <table className={styles.transactionhistory}>
      <thead>
        <tr className={styles.transactionhead}>
          <th className={styles.transactionhead}>Type</th>
          <th className={styles.transactionhead}>Amount</th>
          <th className={styles.transactionhead}>Currency</th>
        </tr>
      </thead>
      <tbody>{orders}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  user: T.shape({
    id: T.string.isRequired,
    type: T.string.isRequired,
    amount: T.string.isRequired,
    currency: T.string.isRequired,
  }).isRequired,
};

export default TransactionHistory;
