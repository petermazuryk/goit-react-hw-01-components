import React from 'react';
import T from 'prop-types';
import styles from './FriendList.module.css';
// import Frienditems from './Friendsitems'; // как вариант можно вынести список друзей в отдельный компонент

const FriendList = ({ friends }) => {
  const friendItems = friends.map(friend => (
    <li className={styles.friendsitem} key={friend.id}>
      <span className={friend.isOnline ? styles.online : styles.offline}></span>
      <img src={friend.avatar} alt="user avatar" className={styles.avatar} />
      <span className={styles.name}>{friend.name}</span>
    </li>
  ));

  return <ul className="styles.friendslist"> {friendItems} </ul>;
};

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      avatar: T.string.isRequired,
      isOnline: T.bool,
      id: T.number.isRequired,
    }),
  ).isRequired,
};



export default FriendList;
