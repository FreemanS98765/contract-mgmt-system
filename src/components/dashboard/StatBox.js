import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatBox = (props) => {
  return (
    <div className="card statbox">
      <div className="card-header">
        <span className="icon-text">
          <span className="icon">
            <FontAwesomeIcon size="4x" color={props.color} icon={props.icon} />
          </span>
        </span>
        <div>
          <p className="light-text">{props.title}</p>
          <span className="card-header-title">{props.figure}</span>
        </div>
      </div>
      <div className="card-footer">
        <span className="card-footer-item">
          <span className="light-text">
            {`Last updated: ${props.lastUpdated}`}
          </span>
        </span>
      </div>
    </div>
  );
};

export default StatBox;
