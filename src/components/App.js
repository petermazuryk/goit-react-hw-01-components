import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import Friendlist from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import profileData from './Profile/data.json';
import statsData from './Stats/dataStats';
import friendsData from './FriendList/friendlist.json';
import transactionsData from './TransactionHistory/transactions.json';

const App = () => (
  <div>
    <Profile user={profileData} />
    <Stats stats={statsData} title="Upload stats" />
    <Friendlist friends={friendsData} />
    <TransactionHistory transactions={transactionsData} />
  </div>
);

export default App;
