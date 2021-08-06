import classes from './NoContractsFound.module.css';

const NoContractsFound = () => {
  return (
    <div className={classes.nocontracts}>
      <p>No quotes found!</p>
      <a className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default NoContractsFound;