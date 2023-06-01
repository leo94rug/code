import { NavLink, useSubmit } from 'react-router-dom';

import classes from './FeedbackItem.module.css';
import FeedbackProps from '../../models/interfaces/FeedbackProps';

const FeedbackItem:React.FC <FeedbackProps> = ({ feedback }) =>   {
  const submit = useSubmit();

  function startDeleteHandler() {
      submit(null, { method: 'delete' });
  }
  return (
    
    <article className={classes.feedback}>
      <h1>{feedback.title}</h1>
      <time>{feedback.date}</time>
      <p>{feedback.description}</p>
      <menu className={classes.actions}>
        <NavLink to="edit">Edit</NavLink>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default FeedbackItem;
