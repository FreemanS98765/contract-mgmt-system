import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Attachments = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="column">
          <div id="attachments" className="block entry-title">
            <h4 className="title">Attachments</h4>
          </div>
          <span className="icon is-large">
            <FontAwesomeIcon className="fas fa-2x" icon={faBook} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Attachments;
