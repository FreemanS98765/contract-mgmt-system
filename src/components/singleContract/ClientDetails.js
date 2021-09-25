import { checkIfEmpty } from "../../utils/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ClientDetails = (props) => {
  return (
    <div className="details-wrap box">
      <div id="clientDetails" className="block entry-title">
        <h4 className="title">Client Details</h4>
      </div>

      <table className="table">
        <tr>
          <td>
            <h5>Client:</h5>
          </td>
          <td>
            <p>{`${props.contract.client}`}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Company:</h5>
          </td>
          <td>
            <p>{`${props.contract.company}`}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Phone:</h5>
          </td>
          <td>
            <span className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>{checkIfEmpty(props.contract.phone)}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Email:</h5>
          </td>
          <td>
            <span className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>{checkIfEmpty(props.contract.email)}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Address</h5>
          </td>
          <td>
            <p>{checkIfEmpty(props.contract.address)}</p>
            <p>{checkIfEmpty(props.contract.city)}</p>
            <p>{checkIfEmpty(props.contract.state)}</p>
            <p>{checkIfEmpty(props.contract.zipcode)}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ClientDetails;
