import Profile from './components/Profile/Profile';
import userdata from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import staticticsdata from './data/data.json';
import Friendlist from './components/FriendList/Friendlist';
import friendsdata from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionsData from './data/transactions.json';
import GlobalStyle from './constants/GlobalStyle';
import Container from './App.styled';

function App() {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Profile user={userdata} />
        <Statistics title="Upload stats" stats={staticticsdata} />
        <Statistics stats={staticticsdata} />
        <Friendlist friends={friendsdata} />
        <TransactionHistory items={transactionsData} />
      </Container>
    </>
  );
}

export default App;
