// import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import classes from './FeedbacksList.module.css';

function FeedbacksList({feedbacks}) {
  // const events = useLoaderData();

  return (
    <div className={classes.feedbacks}>
      <h1>All Feedbacks</h1>
      <ul className={classes.list}>
        {feedbacks.map((feedback) => (
          <li key={feedback.id} className={classes.item}>
            <Link to={`/feedbacks/${feedback.id}`}>
              <div className={classes.content}>
                <h2>{feedback.title}</h2>
                <time>{feedback.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbacksList;
