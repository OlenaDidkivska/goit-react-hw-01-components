import PropTypes from 'prop-types';
import {ProfileEl} from './Profile.styled.jsx'
import PopularityPanel from './PolpularityPanel/PopularityPanel';
import Description from './Description/Description.jsx';

const Profile = ({ user }) => {
  return (
    <ProfileEl>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar = {user.avatar}
      />
      <PopularityPanel
        stats={user.stats}
      />
    </ProfileEl>
  );
}

export default Profile

Profile.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
}