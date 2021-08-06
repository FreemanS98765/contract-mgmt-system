import { Fragment } from "react";

import ContractItem from "./ContractItem";

import "bulma/css/bulma.min.css";
import classes from "./ContractList.module.css";

const ContractList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.contracts.map((contract) => (
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

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Contract</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.contracts.map((contract) => (
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
        </tbody>
      </table>
    </Fragment>
  );
};

export default ContractList;
