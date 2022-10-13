import { DescriptionEl, Avatar, Username, Tracking } from './Description.styled';

const Description = ({username, tag, location, avatar}) => {
    return (<DescriptionEl>
        <Avatar src={avatar} alt={username}/>
        <Username>{username}</Username>
        <Tracking>@{tag}</Tracking>
        <Tracking>{location}</Tracking>
      </DescriptionEl>)
}

export default Description