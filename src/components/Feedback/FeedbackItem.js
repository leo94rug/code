import { Link, useSubmit } from 'react-router-dom';

import classes from './FeedbackItem.module.css';

function FeedbackItem({ feedback }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }
  debugger;
  return (
    
    <article className={classes.feedback}>
      <h1>{feedback.title}</h1>
      <time>{feedback.date}</time>
      <p>{feedback.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default FeedbackItem;
