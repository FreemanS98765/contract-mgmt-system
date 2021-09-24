import React, { useState } from "react";
import { connect } from "react-redux";

import { Fragment } from "react";
import { useParams } from "react-router-dom";

import ContractHeader from "../components/singleContract/ContractHeader";
import ClientDetails from "../components/singleContract/ClientDetails";
import ContractDetails from "../components/singleContract/ContractDetails";
import ContractAttachments from "../components/singleContract/ContractAttachments";

import ContractModal from "../components/contracts/ContractModal.js";

const ContractSingle = (props) => {
  //const params = useParams();
  const dispatchData = props.dispatch;

  let { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contracts = props.contracts;

  console.log("Id is: ", id);

  let contract = contracts.find((c) => {
    return c.id.toString() === id;
  });

  // const {
  //   client,
  //   company,
  //   email,
  //   phone,
  //   address,
  //   city,
  //   state,
  //   zipcode,
  //   title,
  //   startDate,
  //   endDate,
  //   price,
  //   notes,
  //   upload,
  //   status,
  // } = contract || {};

  console.log("Contract destructured : ", contract);

  // let contracts = [];

  // contractState.forEach((c) => {
  //   push(c);
  // });

  // map((c) => {
  //   return c;
  // });

  const openFormModal = () => {
    setIsOpen(true);
  };

  const closeFormModal = () => {
    setIsOpen(false);
  };

  if (!contract) {
    return <p>Contract not found!</p>;
  }

  // const checkIfEmpty = (data) => {
  //   if (data === email) {
  //     return email ? <a href={`mailto:${email}`}>{email}</a> : `Nothing found`;
  //   }

  //   return data ? data : "Nothing found";
  // };

  return (
    <Fragment>
      <ContractHeader
        id={id}
        contract={contract}
        openFormModal={openFormModal}
      />

      <section id="contractSingle" className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter sidebar">
              <div className="menu">
                <ul className="menu-list">
                  <li>
                    <a href="#" className="is-active">Client Details</a>
                  </li>
                  <li>
                    <a href="#">Contract Details</a>
                  </li>
                  <li>
                    <a href="#">Attachments</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column is-three-quarters">
              <ClientDetails contract={contract} />
              <ContractDetails contract={contract} />
              <ContractAttachments contract={contract} />
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        //<ContractModal onClose={showContractModal ? "is-active" : "false"} />
        <ContractModal
          type="edit"
          contract={contract}
          onHideModal={closeFormModal}
          onShowModal={openFormModal}
          dispatchData={dispatchData}
          isOpen={isOpen}
          text="Update Contract"
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    contracts: state.contracts,
    dispatchData: state.dispatch,
  };
};

export default connect(mapStateToProps)(ContractSingle);
