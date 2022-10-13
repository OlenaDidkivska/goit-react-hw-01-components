import PropTypes from 'prop-types';

import {
  FriendListItemStyle,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.style';

const FriendListItem = ({ avatar, name, isOnline }) => {
  console.log(isOnline);
  return (
    <FriendListItemStyle>
      <FriendStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemStyle>
  );
};

export default FriendListItem;

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
