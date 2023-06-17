import { NavLink } from 'react-router-dom';

import classes from './FeedbacksList.module.css';
import Feedback from '../../models/feedback';

const FeedbacksList:React.FC <{feedbacks: Feedback[]}> = ({feedbacks}) =>   {

  return (
    <div className={classes.feedbacks}>
      <h1>All Feedbacks</h1>
      <ul className={classes.list}>
        {feedbacks.map((feedback) => (
          <li key={feedback.id} className={classes.item}>
            <NavLink to={`/feedbacks/${feedback.id}`}>
              <div className={classes.content}>
                <h2>{feedback.title}</h2>
                <time>{feedback.date}</time>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbacksList;
