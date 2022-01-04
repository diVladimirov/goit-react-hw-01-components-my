import FriendListItem from './FriendListItem';
import { Friendlisted } from './FriendList.styled';
import PropTypes from 'prop-types';

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

Friendlist.propTypes = {
  friends: PropTypes.array.isRequired,
};
