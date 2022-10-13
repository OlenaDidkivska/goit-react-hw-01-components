import { FriendListItemStyle, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.style';

const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log(isOnline);
    return (    <FriendListItemStyle>
                    <FriendStatus style={{ backgroundColor: isOnline ? 'green' : 'red' }}/>
                    <FriendAvatar src={avatar} alt={name } width="48" />
                    <FriendName>{name }</FriendName>
                </FriendListItemStyle>)}

export default FriendListItem;

