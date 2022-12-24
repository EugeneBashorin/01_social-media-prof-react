import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile avatar={user.avatar}
               name={user.username}
               tag={user.tag}
               location={user.location}
               stats={user.stats}              
                />
      <Statistics title="Upload stats" statData={data}/>
      <Statistics statData={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};
