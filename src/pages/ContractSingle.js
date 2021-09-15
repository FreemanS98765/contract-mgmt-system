import React, { useState } from "react";
import { connect } from "react-redux";

import { Fragment } from "react";
import { useParams } from "react-router-dom";

import ContractButton from "../components/contracts/ContractButton";

import { Breadcrumbs, BreadcrumbItem } from "../components/UI/Breadcrumbs";
import { getFormattedDate, getFormattedPrice } from "../utils/utils";

import ContractModal from "../components/contracts/ContractModal.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBook } from "@fortawesome/free-solid-svg-icons";

const ContractSingle = (props) => {
  const params = useParams();
  const dispatchData = props.dispatch;

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contracts = props.contracts;
  let contract = contracts.find((c) => {
    return c.id.toString() === params.id;
  });

  const {
    id,
    client,
    company,
    email,
    phone,
    address,
    city,
    state,
    zipcode,
    title,
    startDate,
    endDate,
    price,
    notes,
    upload,
    status,
  } = contract;

  // let contracts = [];

  // contractState.forEach((c) => {
  //   push(c);
  // });

  // map((c) => {
  //   return c;
  // });

  console.log("Contracts state: ", contracts);

  const openFormModal = () => {
    setIsOpen(true);
  };

  const closeFormModal = () => {
    setIsOpen(false);
  };

  

  console.log("Contract state: ", contract);

  const statusVariant =
    status === "Active"
      ? "is-success"
      : status === "Draft"
      ? "is-warning"
      : status === "Expired"
      ? "is-danger"
      : "primary";

  if (!contract) {
    return <p>Contract not found!</p>;
  }

  const checkIfEmpty = (data) => {
    if (data === email) {
      return email ? <a href={`mailto:${email}`}>{email}</a> : `Nothing found`;
    }

    return data ? data : "Nothing found";
  };

  return (
    <Fragment>
      <div className="page-header flex space-between">
        <div className="level">
          <div className="level-item mr-3">
            <h1 className="title is-3 has-text-weight-bold">
              {title ? `Contract #${id}: ${title}` : `Contract #${id}`}
            </h1>
          </div>
          <div className="level-item">
            <span className={`tag is-medium ${statusVariant}`}>
              {status}
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
            to={`/contracts/${id}`}
            className="is-active"
          >{`Contract #${id}`}</BreadcrumbItem>
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
              <p>{`#${id}`}</p>
            </div>
            <div className="contract__detail">
              <h5>Start Date:</h5>
              <p>{checkIfEmpty(getFormattedDate(startDate))}</p>
            </div>
            <div className="contract__detail">
              <h5>End Date:</h5>
              <p>{checkIfEmpty(getFormattedDate(endDate))}</p>
            </div>
            <div className="contract__detail">
              <h5>Contract Amount:</h5>
              <p>{checkIfEmpty(getFormattedPrice(price))}</p>
            </div>

            <div className="block">
              <h3 className="is-size-3 has-text-weight-bold">Client Details</h3>
            </div>

            <div className="contract__detail">
              <h5>Client</h5>
              <p>{`${client}`}</p>
            </div>
            <div className="contract__detail">
              <h5>Company</h5>
              <p>{`${company}`}</p>
            </div>
            <div className="contract__detail is-align-content-flex-start">
              <h5>Contact Information</h5>
              <div className="contract__contact-info">
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span>{checkIfEmpty(phone)}</span>
                </span>
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>{checkIfEmpty(email)}</span>
                </span>
              </div>
            </div>
            <div className="contract__detail">
              <h5>Address</h5>

              <div>
                <p>{checkIfEmpty(address)}</p>
                <p>{checkIfEmpty(city)}</p>
                <p>{checkIfEmpty(state)}</p>
                <p>{checkIfEmpty(zipcode)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="block">
          <h5 className="title is-3">Notes</h5>
          <p>{checkIfEmpty(notes)}</p>
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
          text='Update Contract'
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
