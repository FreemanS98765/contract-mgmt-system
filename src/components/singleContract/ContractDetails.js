import {
  getFormattedDate,
  getFormattedPrice,
  checkIfEmpty,
} from "../../utils/utils";

const ContractDetails = (props) => {
  return (
    <div className="details-wrap box">
      <div id="contractDetails" className="block entry-title">
        <h4 className="title">Contract Details</h4>
      </div>

      <table className="table">
        <tr>
          <td>
            <h5>Contract ID:</h5>
          </td>
          <td>
            <p>{`#${props.contract.id}`}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Start Date:</h5>
          </td>
          <td>
            <p>{checkIfEmpty(getFormattedDate(props.contract.startDate))}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h5>End Date:</h5>
          </td>
          <td>
            <p>{checkIfEmpty(getFormattedDate(props.contract.endDate))}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Contract Amount:</h5>
          </td>
          <td>
            <p>{checkIfEmpty(getFormattedPrice(props.contract.price))}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Notes</h5>
          </td>
          <td>
            <p>{checkIfEmpty(props.contract.notes)}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ContractDetails;
