import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => {
  const statsList = stats.map(stat => (
    <li className={styles.item} key={stats.id}>
      <span className={styles.label}>{stat.label}</span>
      <p className={styles.percentage}>{stat.percentage} %</p>
    </li>
  ));

  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{statsList}</ul>
    </section>
  );
};

Stats.propTypes = {
  stats: T.arrayOf(
    T.shape({
      id: T.string,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
