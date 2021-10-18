import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faEye,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const TableDropdown = (props) => {

  console.log('Props slug is: ', props);
  return (
    <div className={`dropdown ${props.selected ? "is-active" : ""} `}>
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={props.onClick}
        >
          <span className="icon is-small">
            <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
          </span>
        </button>
      </div>
      <div
        className="dropdown-menu"
        id={`actions-menu-${props.id}`}
        role="menu"
      >
        <div className="dropdown-content">
          <Link
            className="dropdown-item"
            to={`/${props.postType}/${props.slug}`}
          >
            <span className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={faEye} />
              </span>
              <span>View Details</span>
            </span>
          </Link>
          <button
            className="dropdown-item"
            onClick={(e) => {
              const id = props.id;

              //props.dispatchData(removeContract({ id }));
              props.onRemove(id);
            }}
          >
            <span className="icon-text has-text-danger">
              <span className="icon">
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
              <span>Remove</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableDropdown;
