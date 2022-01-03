import FriendListItem from './FriendListItem';
import { Friendlisted } from './FriendList.styled';

const Friendlist = ({ friends }) => {
  return (
    <Friendlisted>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friendData={friend} />
      ))}
    </Friendlisted>
  );
};

export default Friendlist;
