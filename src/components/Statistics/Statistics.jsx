import PropTypes from 'prop-types';
import { Statisticsed, Title, StatList, Item, Percentage } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Statisticsed>
      {title && <Title>{title}</Title>}
      {title && (
        <StatList>
          {stats.map(stat => (
            <Item key={stat.id}>
              <span>{stat.label}</span>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          ))}
        </StatList>
      )}
    </Statisticsed>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
