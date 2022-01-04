import PropTypes from 'prop-types';
import { Item, Name, StatusOn, StatusOff } from './FriendList.styled';

const FriendListItem = ({ friendData: { avatar, name, isOnline } }) => {
  return (
    <Item>
      {isOnline ? <StatusOn></StatusOn> : <StatusOff></StatusOff>}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  friendData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
