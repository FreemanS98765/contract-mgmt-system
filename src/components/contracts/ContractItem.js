import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
import classes from "./ContractItem.module.css";

import { CONTRACT_TABLE_HEADERS } from "../../data/data";

const ContractItem = (props) => {
  const renderValues = (val) => {
    // Converts date object to string
    if (Object.prototype.toString.call(val) === "[object Date]") {
      return `${val.getMonth() + 1}/${val.getDate()}/${val.getFullYear()}`;
    }

    if (val === props.action) {
      return (
        <Link className={classes.action} to={`/contracts/${props.id}`}>
          {val}
        </Link>
      );
    }
    return val;
  };

  return (
    <tr>
      {CONTRACT_TABLE_HEADERS.map((header, i) => {
        //console.log(header);
        const value = props.contract[header.id];
        return <td key={i}>{renderValues(value)}</td>;
      })}
    </tr>
  );
};

export default ContractItem;
