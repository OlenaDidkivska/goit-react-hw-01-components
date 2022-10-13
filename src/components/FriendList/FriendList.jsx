import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { FriendListStyle } from './FriendList.style';

const FriendList = ({ friends }) => {
    return (
        <FriendListStyle>
            {friends.map(friend => <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline = {friend.isOnline}
            />)}
        </FriendListStyle>
    )
}

export default FriendList;

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}