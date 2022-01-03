import PropTypes from 'prop-types';
import {
  Profiled,
  Avatar,
  Description,
  Name,
  TagLocation,
  Stats,
  Items,
  Amount,
} from './Profile.styled';

const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <Profiled>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <TagLocation>@{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </Description>

      <Stats>
        <Items>
          <span>Followers</span>
          <Amount>{stats.followers}</Amount>
        </Items>
        <Items>
          <span>Views</span>
          <Amount>{stats.views}</Amount>
        </Items>
        <Items>
          <span>Likes</span>
          <Amount>{stats.likes}</Amount>
        </Items>
      </Stats>
    </Profiled>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
