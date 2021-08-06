import { Link } from 'react-router-dom';

import classes from './ContractItem.module.css';

const ContractItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/contracts/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default ContractItem;