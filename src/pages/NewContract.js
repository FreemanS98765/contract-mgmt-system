import { Fragment } from "react";
import NewContractForm from "../components/contracts/NewContractForm";

const NewContract = () => {
  return (
    <Fragment>
      <div className="columns page-header">
        <div className="column">
          <h1 className="page-title">New Contract</h1>
        </div>
      </div>

      <div className="container">
        <NewContractForm />
      </div>
    </Fragment>
  );
};

export default NewContract;
