import {
  getFormattedDate,
  getFormattedPrice,
  checkIfEmpty,
} from "../../utils/utils";

const ContractDetails = (props) => {
  return (
    <div id="contractDetails" className="box">
      <div className="block entry-title">
        <h4 className="title">Contract Details</h4>
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

      <div className="contract__notes">
        <h4 className="subtitle">Notes</h4>
        <p>{checkIfEmpty(props.contract.notes)}</p>
      </div>
    </div>
  );
};

export default ContractDetails;
