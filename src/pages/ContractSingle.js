import React, { useState } from "react";
import { connect } from "react-redux";

import { Fragment } from "react";
import { useParams, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import ContractHeader from "../components/singleContract/ContractHeader";
import ClientDetails from "../components/singleContract/ClientDetails";
import ContractDetails from "../components/singleContract/ContractDetails";
import ContractAttachments from "../components/singleContract/ContractAttachments";

import ContractModal from "../components/contracts/ContractModal.js";

const ContractSingle = (props) => {
  //const params = useParams();
  const dispatchData = props.dispatch;

  let { slug, id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const setActiveLink = (e) => {
    setIsSelected(true);
  };

  const contracts = props.contracts;

  console.log("Slug is: ", slug);

  let contract = contracts.find((c) => {
    return c.slug === slug;
  });

  console.log("Contract destructured : ", contract);

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
        slug={slug}
        contract={contract}
        openFormModal={openFormModal}
      />

      <section id="contractSingle" className="section page-single">
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter sidebar">
              <div className="box">
                <div className="menu">
                  <ul className="menu-list">
                    <li>
                      <NavHashLink
                        activeClassName="is-active"
                        smooth
                        to="#contractDetails"
                      >
                        Contract Details
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink
                        activeClassName="is-active"
                        smooth
                        to="#clientDetails"
                      >
                        Client Details
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink
                        activeClassName="is-active"
                        smooth
                        to="#attachments"
                      >
                        Attachments
                      </NavHashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-three-quarters">
              <ContractDetails contract={contract} />
              <ClientDetails contract={contract} />
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
