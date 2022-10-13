import PropTypes from 'prop-types';
import {
  DescriptionEl,
  Avatar,
  Username,
  Tracking,
} from './Description.styled';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <DescriptionEl>
      <Avatar src={avatar} alt={username} />
      <Username>{username}</Username>
      <Tracking>@{tag}</Tracking>
      <Tracking>{location}</Tracking>
    </DescriptionEl>
  );
};

export default Description;

Description.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
