import { AppEl } from './App.styled';
import user from './Profile/user';
import data from './Statistics/data'
import friends from './FriendList/friends'
import transactions from './TransactionHistory/transactions'
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <AppEl>
      <Profile user={user} />
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendList friends={friends}/>
    </AppEl>
  );
};

