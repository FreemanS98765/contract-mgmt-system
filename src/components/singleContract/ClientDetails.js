import { checkIfEmpty } from "../../utils/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ClientDetails = (props) => {
  return (
    <div id="clientDetails" className="client-details box">
      <div className="block entry-title">
        <h4 className="title">Client Details</h4>
      </div>

      <div className="contract__detail">
        <h5>Client</h5>
        <p>{`${props.contract.client}`}</p>
      </div>
      <div className="contract__detail">
        <h5>Company</h5>
        <p>{`${props.contract.company}`}</p>
      </div>
      <div className="contract__detail is-align-content-flex-start">
        <h5>Contact Information</h5>
        <div className="contract__contact-info">
          <span className="icon-text">
            <span className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span>{checkIfEmpty(props.contract.phone)}</span>
          </span>
          <span className="icon-text">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span>{checkIfEmpty(props.contract.email)}</span>
          </span>
        </div>
      </div>
      <div className="contract__detail">
        <h5>Address</h5>

        <div>
          <p>{checkIfEmpty(props.contract.address)}</p>
          <p>{checkIfEmpty(props.contract.city)}</p>
          <p>{checkIfEmpty(props.contract.state)}</p>
          <p>{checkIfEmpty(props.contract.zipcode)}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
