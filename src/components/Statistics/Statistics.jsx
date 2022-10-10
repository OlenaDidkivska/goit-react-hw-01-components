import PropTypes from 'prop-types';
import { StatisticsEl, Title } from './Statistics.styled';
import { StatList } from './StatList/StatList';

const Statistics = ({ title, stats }) => {
  return (<StatisticsEl>
    {title && <Title>{title}</Title>}    
    <StatList stats={stats} />
</StatisticsEl>)
}

export default Statistics