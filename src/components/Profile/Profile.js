import React from 'react';
import T from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const userStats = Object.keys(user.stats);
  // const userLi = userStats.map(stat => (
  //   <li>
  //     <span>{stat}</span>
  //     <span>{user.stats[stat]}</span>
  //   </li>
  // ));

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={user.avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{user.name}</p>
        <p className={styles.tag}>@{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>
      <ul className={styles.profilelist}>
        {userStats.map(stat => (
          <li className={styles.profileitem}>
            <span>{stat}</span>
            <span>{user.stats[stat]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: T.shape({
    name: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    avatar: T.string.isRequired,
    stats: T.shape({
      folowers: T.number,
      views: T.number,
      likes: T.number,
    }).isRequired,
  }).isRequired,
};

export default Profile;
