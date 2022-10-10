import PropTypes from 'prop-types';
import { Stats, StatsItem, Label, Quantity } from './PopularityPanel.styled';

const PopularityPanel = ({ stats }) => {
    const {followers, views, likes} = stats;
    return (<Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity> {followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity> {views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
        <Quantity> {likes}</Quantity>
        </StatsItem>
      </Stats>)
}

PopularityPanel.propTypes = {
  stats: PropTypes.shape(
    {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }
  )
}

export default PopularityPanel;

