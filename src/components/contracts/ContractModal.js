import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ContractForm from "./ContractForm";
import useHttp from "../../hooks/use-http";

import { addContract, editContract } from "../../actions/contracts";

import { addUpload } from "../../actions/uploads";
import { addNotification } from "../../actions/notifications";

const { v4: uuidv4 } = require("uuid");

const ContractModal = (props) => {
  const { sendRequest, loadingStatus } = useHttp(addContract);
  const history = useHistory();
  const [id, setId] = useState();

  const contracts = props.contracts;

  const saveContractDataHandler = (
    fields,
    setSubmitting,
    isNewContract,
    resetForm
  ) => {
    const savedData = {
      ...fields,
      status: "Active",
      slug: fields.title,
      upload: fields.files.name,
      filename: fields.files.name,
      path: fields.path,
    };

    if (isNewContract) {
      props
        .dispatchData(addContract(savedData))
        .then(() => {
          console.log("Saved data is: ", savedData);
          props.dispatchData(addUpload(savedData));
        })
        .then(() => {
          props.dispatchData(
            addNotification({
              title: "A new contract was created!",
              itemTitle: savedData.title,
              message: `A new contract was created for ${savedData.company}`,
              url: `/contracts/${savedData.slug}`,
            })
          );
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
      slug: fields.title,
    };

    if (isNewContract) {
      props
        .dispatchData(addContract(draftedData))
        .then(() => {
          props.dispatchData(addUpload(draftedData));
        })
        .then(
          props.dispatchData(
            addNotification({
              title: "A drafted contract was created!",
              itemTitle: draftedData.title,
              message: `A drafted contract was created for ${draftedData.company}`,
              url: `/contracts/${draftedData.slug}`,
            })
          )
        )
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
        //history.push(".");
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
