import React from 'react';

import NewContractForm from "./NewContractForm";
import { connect } from "react-redux";
import uiSlice from "../../reducers/ui-slice";
import { addContract } from "../../actions/contracts";
import { useHistory } from 'react-router-dom';

const ContractModal = (props) => {
  let history = useHistory();

  const toggleModalHandler = () => {
    //props.dispatch(uiSlice);
    props.dispatch('TOGGLE_MODAL', props.isToggled)
    console.log(props.isToggled);
  };

  const saveContractDataHandler = (enteredContractData) => {
    // const contractData = {
    //   ...enteredContractData,
    // };
    //props.onAddContract(contractData);
    props.dispatch(addContract(enteredContractData));
    //props.history.push('/');

    toggleModalHandler();
  };

  const draftContractDataHandler = async (enteredContractData) => {
    await new Promise((r) => setTimeout(r, 500));

    const newValues = {
      ...enteredContractData,
      status: "Draft",
    };
    console.log(newValues);
    props.dispatch(addContract(newValues));

    toggleModalHandler();
  };

  return (
    <div className={`modal ${props.toggleModal}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">New Contract</p>
        </header>
        <section className="modal-card-body">
          <NewContractForm
            onSaveContractData={saveContractDataHandler}
            onDraftContractData={draftContractDataHandler}
          />
        </section>
      </div>
      <button
        onClick={toggleModalHandler}
        className="modal-close is-large"
        aria-label="close"
      />
    </div>
  );
};

export default connect()(ContractModal);
