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
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};
