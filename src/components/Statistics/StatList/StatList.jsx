import PropTypes from 'prop-types';
import { StatListStyle, StatListItem, StatListLabel, StatListPercentage } from './StatList.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatList = ({stats}) => {
    return (<StatListStyle>
      {stats.map(el => <StatListItem
        key={el.id}
        style={{ backgroundColor: getRandomHexColor() }}>
        <StatListLabel>{el.label}</StatListLabel>
        <StatListPercentage> {el.percentage} %</StatListPercentage>
    </StatListItem>)}
  </StatListStyle>)
}

StatList.prototype = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}