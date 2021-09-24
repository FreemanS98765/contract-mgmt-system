import {
  getFormattedDate,
  getFormattedPrice,
  checkIfEmpty,
} from "../../utils/utils";

const ContractDetails = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="column">
          <div className="contract__detail">
            <h3 className="is-size-3 has-text-weight-bold">Contract Details</h3>
          </div>
          <div className="contract__detail">
            <h5>Contract ID:</h5>
            <p>{`#${props.contract.id}`}</p>
          </div>
          <div className="contract__detail">
            <h5>Start Date:</h5>
            <p>{checkIfEmpty(getFormattedDate(props.contract.startDate))}</p>
          </div>
          <div className="contract__detail">
            <h5>End Date:</h5>
            <p>{checkIfEmpty(getFormattedDate(props.contract.endDate))}</p>
          </div>
          <div className="contract__detail">
            <h5>Contract Amount:</h5>
            <p>{checkIfEmpty(getFormattedPrice(props.contract.price))}</p>
          </div>
        </div>
        <div className="column">
          <h5 className="title is-3">Notes</h5>
          <p>{checkIfEmpty(props.contract.notes)}</p>
        </div>
      </div>
    </section>
  );
};

export default ContractDetails;
