import React, { useState } from "react";
import { connect } from "react-redux";

import { Fragment } from "react";
import { useParams } from "react-router-dom";

import ContractButton from "../components/contracts/ContractButton";

import { Breadcrumbs, BreadcrumbItem } from "../components/UI/Breadcrumbs";
import { getFormattedDate, formatPrice } from "../utils/utils";

import ContractModal from "../components/contracts/ContractModal.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBook } from "@fortawesome/free-solid-svg-icons";

const ContractSingle = (props) => {
  const params = useParams();
  const dispatchData = props.dispatch;

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  //const { id, startDate, endDate, contract, client, amount, status } = props;

  const openFormModal = () => {
    setIsOpen(true);
  };

  const closeFormModal = () => {
    setIsOpen(false);
  };

  const contracts = props.contractState.find(
    (contract) => contract.id.toString() === params.id
  );

  const statusVariant =
    contracts.status === "Active"
      ? "is-success"
      : contracts.status === "Draft"
      ? "is-warning"
      : contracts.status === "Expired"
      ? "is-danger"
      : "primary";

  if (!contracts) {
    return <p>Contract not found!</p>;
  }

  const checkIfEmpty = (data) => {
    if (data === contracts.email) {
      return contracts.email ? (
        <a href={`mailto:${contracts.email}`}>{contracts.email}</a>
      ) : (
        `Nothing found`
      );
    }

    return data ? data : "Nothing found";
  };

  return (
    <Fragment>
      <div className="page-header flex space-between">
        <div className="level">
          <div className="level-item mr-3">
            <h1 className="title is-3 has-text-weight-bold">
              {contracts.title
                ? `Contract #${contracts.id}: ${contracts.title}`
                : `Contract #${contracts.id}`}
            </h1>
          </div>
          <div className="level-item">
            <span className={`tag is-medium ${statusVariant}`}>
              {contracts.status}
            </span>
          </div>
        </div>
        <ContractButton text="Edit Contract" onShowModal={openFormModal} />
      </div>
      <div className="mt-3">
        <Breadcrumbs className="has-arrow-separator">
          <BreadcrumbItem to={`/dashboard`}>Dashboard</BreadcrumbItem>
          <BreadcrumbItem to={`/contracts`}>Contracts</BreadcrumbItem>
          <BreadcrumbItem
            to={`/contracts/${contracts.id}`}
            className="is-active"
          >{`Contract #${contracts.id}`}</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <section className="section">
        <div className="container">
          <div className="column">
            <div className="contract__detail">
              <h3 className="is-size-3 has-text-weight-bold">
                Contract Details
              </h3>
            </div>
            <div className="contract__detail">
              <h5>Contract ID:</h5>
              <p>{`#${contracts.id}`}</p>
            </div>
            <div className="contract__detail">
              <h5>Start Date:</h5>
              <p>{checkIfEmpty(getFormattedDate(contracts.startDate))}</p>
            </div>
            <div className="contract__detail">
              <h5>End Date:</h5>
              <p>{checkIfEmpty(getFormattedDate(contracts.endDate))}</p>
            </div>
            <div className="contract__detail">
              <h5>Contract Amount:</h5>
              <p>{checkIfEmpty(formatPrice(contracts.price))}</p>
            </div>

            <div className="block">
              <h3 className="is-size-3 has-text-weight-bold">Client Details</h3>
            </div>

            <div className="contract__detail">
              <h5>Client</h5>
              <p>{`${contracts.client}`}</p>
            </div>
            <div className="contract__detail">
              <h5>Company</h5>
              <p>{`${contracts.company}`}</p>
            </div>
            <div className="contract__detail is-align-content-flex-start">
              <h5>Contact Information</h5>
              <div className="contract__contact-info">
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span>{checkIfEmpty(contracts.phone)}</span>
                </span>
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>{checkIfEmpty(contracts.email)}</span>
                </span>
              </div>
            </div>
            <div className="contract__detail">
              <h5>Address</h5>

              <div>
                <p>{checkIfEmpty(contracts.address)}</p>
                <p>{checkIfEmpty(contracts.city)}</p>
                <p>{checkIfEmpty(contracts.state)}</p>
                <p>{checkIfEmpty(contracts.zipcode)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="block">
          <h5 className="title is-3">Notes</h5>
          <p>{checkIfEmpty(contracts.notes)}</p>
        </div>
      </section>
      <section className="section">
        <div className="block">
          <h5 className="title is-3">Attachments</h5>
          <span className="icon is-large">
            <FontAwesomeIcon className="fas fa-2x" icon={faBook} />
          </span>
        </div>
      </section>

      {isOpen && (
        //<ContractModal onClose={showContractModal ? "is-active" : "false"} />
        <ContractModal
          onHideModal={closeFormModal}
          onShowModal={openFormModal}
          dispatchData={dispatchData}
          isOpen={isOpen}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    contractState: state.contracts,
    dispatchData: state.dispatch,
  };
};

export default connect(mapStateToProps)(ContractSingle);
