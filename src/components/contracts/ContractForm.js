import { useRef } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./ContractForm.module.css";

const ContractForm = (props) => {
  const clientInputRef = useRef();
  const contractNameInputRef = useRef();
  const amountInputRef = useRef();
  const statusInputRef = useRef();
  const startDateInputRef = useRef();
  const endDateInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredClient = clientInputRef.current.value;
    const enteredContractName = contractNameInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredStatus = statusInputRef.current.value;
    const enteredStartDate = startDateInputRef.current.value;
    const enteredEndDate = endDateInputRef.current.value;

    props.onAddContract({
      client: enteredClient,
      contractName: enteredContractName,
      amount: enteredAmount,
      status: enteredStatus,
      startDate: enteredStartDate,
      endDate: enteredEndDate,
    });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>

        {props.isLoading && (
            <div className={classes.loading}>
                <LoadingSpinner />
            </div>
        )}

        <div className={classes.control}>
          <label htmlFor="client">Client</label>
          <input type="text" id="client" ref={clientInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="contractName">Contract Name</label>
          <input type="text" id="contractName" ref={contractNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" ref={amountInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="status">Status</label>
          <input type="text" id="status" ref={statusInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="startDate">Start Date</label>
          <input type="text" id="startDate" ref={startDateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="endDate">End Date</label>
          <input type="text" id="endDate" ref={endDateInputRef} />
        </div>

        <div className={classes.actions}>
            <button className='btn'>Add Contract</button>
        </div>
      </form>
    </Card>
  );
};

export default ContractForm;
