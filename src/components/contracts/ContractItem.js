import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
import classes from "./ContractItem.module.css";

import { CONTRACT_TABLE_HEADERS } from "../../data/data";

const ContractItem = (props) => {

  // Converts date object to string
  const convertDateFormat = (val) => {
    if (Object.prototype.toString.call(val) === "[object Date]") {
      return `${val.getMonth() + 1}/${val.getDate()}/${val.getFullYear()}`;
    }

    if (val === props.action) {
      return (
        <Link className={classes.action} to={`/contracts/${props.id}`}>
          {val}
        </Link>
      )
    }
    return val;
  };

  return (
    <tr>
      {CONTRACT_TABLE_HEADERS.map((header) => {
        const value = props.contract[header.id];

        return <td className='table-body'>{convertDateFormat(value)}</td>;
      })}

      {/* <td>{props.id}</td>
      <td>{props.client}</td>
      <td>{props.contractName}</td>
      <td>{convertDateFormat(props.startDate)}</td>
      <td>{convertDateFormat(props.endDate)}</td>
      <td>{props.amount}</td>
      <td>{props.status}</td>
      <td>
        <Link className="btn" to={`/contracts/${props.id}`}>
          {props.action}
        </Link>
      </td> */}
    </tr>
  );
};

export default ContractItem;
