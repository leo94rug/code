import PageContentProps from '../../models/interfaces/PageContentProps';
import classes from './PageContent.module.css';

const PageContent:React.FC <PageContentProps> = ({ title, children }) =>  {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
