import { Fragment } from "react";

import ContractItem from "./ContractItem";
import classes from "./ContractList.module.css";

const ContractList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
          {props.ContractList.map((contract) => (
              <ContractItem 
                key={contract.id}
                id={contract.id}
                startDate={contract.startDate}
                endDate={contract.endDate}
                contractName={contract.contractName}
                client={contract.client}
                amount={contract.amount}
                status={contract.status}
                action={contract.action}
              />
          ))}
      </ul>
    </Fragment>
  );
};

export default ContractList;
