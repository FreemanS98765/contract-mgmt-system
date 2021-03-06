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

  const saveContractDataHandler = (fields, setSubmitting) => {
    const savedData = {
      ...fields,
      status: "Active",
      slug: fields.title,
      upload: fields.files.name,
      filename: fields.files.name,
      path: fields.path,
    };

    props
      .dispatchData(addContract(savedData))
      .then(() => {
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

    props.onHideModal();
  };

  const draftContractDataHandler = (fields, setSubmitting, isNewContract) => {
    const draftedData = {
      ...fields,
      status: "Draft",
      slug: fields.title,
      upload: fields.files.name,
      filename: fields.files.name,
      path: fields.path,
    };

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
        setSubmitting(false);
        console.log(error);
      });

    props.onHideModal();
  };

  const updateContractDataHandler = (id, fields, setSubmitting) => {
    // Update contract data
    props
      .dispatchData(editContract(id, fields))
      .then(
        props.dispatchData(
          addNotification({
            title: "A contract was updated!",
            itemTitle: fields.title,
            message: `The contract for ${fields.company} was updated.`,
            url: `/contracts/${fields.slug}`,
          })
        )
      )
      .catch((error) => {
        setSubmitting(false);
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
