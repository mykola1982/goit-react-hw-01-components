import Profile from 'components/Profile/Profile';
import user from 'data/user';
import Statistics from 'components/Statistics/Statistics';
import data from 'data/data';
import FriendList from 'components/FriendList/FriendList';
import friends from 'data/friends';
// import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
// import transactions from 'data/transactions';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
