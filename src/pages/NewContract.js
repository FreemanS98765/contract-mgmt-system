import { Fragment } from "react";
import ContractForm from "../components/contracts/ContractForm";

const NewContract = () => {
  return (
    <Fragment>
      <div className="columns page-header">
        <div className="column">
          <h1 className="page-title">New Contract</h1>
        </div>
      </div>

      <div className="container content">
        <ContractForm />
      </div>
    </Fragment>
  );
};

export default NewContract;
