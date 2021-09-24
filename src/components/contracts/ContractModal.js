import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import ContractForm from "./ContractForm";
import useHttp from "../../hooks/use-http";

import { addContract, editContract } from "../../actions/contracts";

const ContractModal = (props) => {
  const { sendRequest, loadingStatus } = useHttp(addContract);
  const history = useHistory();

  // useEffect(() => {
  //   if (loadingStatus === "completed") {
  //     history.push("/contracts");
  //     props.onHideModal();
  //   }
  // }, [loadingStatus, history]);

  const saveContractDataHandler = async (
    fields,
    setSubmitting,
    isNewContract,
    resetForm
  ) => {
    //await new Promise((r) => setTimeout(r, 1000));

    const savedData = {
      ...fields,
      status: "Active",
    };

    if (isNewContract) {
      props
        .dispatchData(addContract(savedData))
        .then(() => {
          history.push("/contracts");
        })
        .catch((error) => {
          setSubmitting(false);
          console.log(error);
        });

      resetForm();
    } else {
      updateContractDataHandler(fields.id, savedData, setSubmitting);
    }

    props.onHideModal();
  };

  const draftContractDataHandler = (fields, setSubmitting, isNewContract) => {
    //await new Promise((r) => setTimeout(r, 1000));

    const draftedData = {
      ...fields,
      status: "Draft",
    };

    console.log("Drafted Data status: ", draftedData.status);

    if (isNewContract) {
      props
        .dispatchData(addContract(draftedData))
        .then(() => {
          history.push("/contracts");
        })
        .catch((error) => {
          console.log(error);
          setSubmitting(false);
        });
    } else {
      updateContractDataHandler(fields.id, draftedData, setSubmitting);
    }

    props.onHideModal();
  };

  const updateContractDataHandler = (id, fields, setSubmitting) => {
    // Update contract data
    props
      .dispatchData(editContract(id, fields))
      .then(() => {
        history.push("/contracts");
      })
      .catch((error) => {
        console.log(error);
      });
    props.onHideModal();
  };

  return (
    <div className={`modal ${props.isOpen === true ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {props.type === "edit" ? "Update Contract" : "New Contract"}
          </p>
        </header>
        <section className="modal-card-body">
          <ContractForm
            type={props.type}
            onSaveContractData={saveContractDataHandler}
            onUpdateContractData={updateContractDataHandler}
            onDraftContractData={draftContractDataHandler}
            onCancel={props.onHideModal}
            isLoading={loadingStatus === "pending"}
            text={props.text}
            contract={props.contract}
            dispatchData={props.dispatchData}
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
