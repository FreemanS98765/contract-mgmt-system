import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
import classes from "./ContractItem.module.css";

const ContractItem = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.client}</td>
      <td>{props.contractName}</td>
      <td>{props.startDate}</td>
      <td>{props.endDate}</td>
      <td>{props.amount}</td>
      <td>{props.status}</td>
      <td>
        <Link className="btn" to={`/contracts/${props.id}`}>
          {props.action}
        </Link>
      </td>
    </tr>
  );
};

export default ContractItem;
