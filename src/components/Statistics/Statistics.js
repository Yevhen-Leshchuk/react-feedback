import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = props => {
  console.log(props);
  const stats = Object.keys(props);

  return (
    <div className={s.statistics}>
      <ul>
        {stats.map(stat => (
          <li className={s.item} key={stat}>
            {stat !== 'positivePercentage' ? stat : 'Positive Feedback'}:
            <span className={s.value}>
              {props[stat]}
              {stat === 'positivePercentage' && '%'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
