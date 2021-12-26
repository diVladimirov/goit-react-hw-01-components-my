import FriendListItem from './FriendListItem';

const Friendlist = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friendData={friend} />
      ))}
    </ul>
  );
};

export default Friendlist;
