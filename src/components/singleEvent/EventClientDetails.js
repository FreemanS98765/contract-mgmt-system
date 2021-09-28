import { checkIfEmpty } from "../../utils/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const EventClientDetails = (props) => {
  const event = props.event;

  return (
    <div className="details-wrap box">
      <div id="eventClientDetails" className="block entry-title">
        <h4 className="title">Client Details</h4>
      </div>

      <table className="table">
        <tbody>
          <tr>
            <td>
              <h5>Client:</h5>
            </td>
            <td>
              <p>{`${event.client}`}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Company:</h5>
            </td>
            <td>
              <p>{`${event.company}`}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventClientDetails;
