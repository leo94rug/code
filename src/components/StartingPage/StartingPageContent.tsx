import classes from './StartingPageContent.module.css';
import React from 'react';

const StartingPageContent:React.FC <{}> = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};

export default StartingPageContent;
