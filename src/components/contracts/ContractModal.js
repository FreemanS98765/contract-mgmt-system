import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import NewContractForm from "./NewContractForm";
import useHttp from "../../hooks/use-http";

import { addContract, editContract } from "../../actions/contracts";

const ContractModal = (props) => {
  const { sendRequest, loadingStatus } = useHttp(addContract);
  const history = useHistory();

  console.log(`loadingStatus is: ${loadingStatus}`);

  // useEffect(() => {
  //   if (loadingStatus === "completed") {
  //     history.push("/contracts");
  //     props.onHideModal();
  //   }
  // }, [loadingStatus, history]);

  const saveContractDataHandler = async (enteredContractData) => {
    await new Promise((r) => setTimeout(r, 1000));

    const savedData = {
      ...enteredContractData,
      status: "Active",
    };
    console.log("New contract data is: ", savedData);

    // post contract data
    props.dispatchData(addContract(savedData));
    props.onHideModal();
  };

  const updateContractDataHandler = async (enteredContractData, id) => {
    await new Promise((r) => setTimeout(r, 1000));

    const savedData = {
      ...enteredContractData,
    };
    console.log("Updated contract data is: ", id);

    // post contract data
    props.dispatchData(editContract(id, savedData));
    props.onHideModal();
  };

  const draftContractDataHandler = async (enteredContractData) => {
    await new Promise((r) => setTimeout(r, 1000));

    const draftedData = {
      ...enteredContractData,
      status: "Draft",
    };
    console.log(draftedData);
    props.dispatchData(addContract(draftedData));
    props.onHideModal();
  };

  const processContractHandler = (contractData) => {
    sendRequest(contractData);
  };

  return (
    <div className={`modal ${props.isOpen === true ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.type === 'edit' ? 'Update Contract' : 'New Contract' }</p>
        </header>
        <section className="modal-card-body">
          <NewContractForm
            type={props.type}
            onSaveContractData={saveContractDataHandler}
            onUpdateContractData={updateContractDataHandler}
            onDraftContractData={draftContractDataHandler}
            onCancel={props.onHideModal}
            isLoading={loadingStatus === "pending"}
            onProcessContractHandler={processContractHandler}
            text={props.text}
            contract={props.contract}
          />
        </section>
      </div>
      <button
        onClick={props.onHideModal}
        className="modal-close is-large"
        aria-label="close"
      />
    </div>
  );
};

export default ContractModal;
