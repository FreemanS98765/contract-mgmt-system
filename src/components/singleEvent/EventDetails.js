import {
  getFormattedDate,
  getFormattedPrice,
  checkIfEmpty,
} from "../../utils/utils";

const EventDetails = (props) => {

  const event = props.event;

  return (
    <div className="details-wrap box">
      <div id="eventDetails" className="block entry-title">
        <h4 className="title">Event Details</h4>
      </div>

      <table className="table">
        <tbody>
          <tr>
            <td>
              <h5>Event ID:</h5>
            </td>
            <td>
              <p>{`#${event.id}`}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Start Date:</h5>
            </td>
            <td>
              <p>{checkIfEmpty(getFormattedDate(event.startDate))}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Start Time:</h5>
            </td>
            <td>
              <p>{checkIfEmpty(event.startTime)}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>End Date:</h5>
            </td>
            <td>
              <p>{checkIfEmpty(getFormattedDate(event.endDate))}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>End Time:</h5>
            </td>
            <td>
              <p>{checkIfEmpty(event.endTime)}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Last Year's Amount:</h5>
            </td>
            <td>
              <p>{checkIfEmpty(getFormattedPrice(event.lastYearsPrice))}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Notes</h5>
            </td>
            <td>
              <p>{checkIfEmpty(event.notes)}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventDetails;
