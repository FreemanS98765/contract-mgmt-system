import React from "react";
import { connect } from "react-redux";

import { Fragment } from "react";
import { useParams } from "react-router-dom";

import { Contract } from "../models/contract.model";

import ContractEditButton from "../components/contracts/ContractEditButton";

import { Breadcrumbs, BreadcrumbItem } from "../components/UI/Breadcrumbs";
import { getFormattedDate, formatPrice } from "../utils/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBook } from "@fortawesome/free-solid-svg-icons";

const ContractSingle = (props) => {
  const params = useParams();

  console.log("Single contract page: ", props.contracts.contractObj);

  //const { id, startDate, endDate, contract, client, amount, status } = props;

  const contracts = props.contracts.contractObj.contracts.find(
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

  console.log(contracts);

  if (!contracts) {
    return <p>Contract not found!</p>;
  }

  return (
    <Fragment>
      <div className="page-header flex space-between">
        <div className="level">
          <div className="level-item mr-3">
            <h1 className="title is-3 has-text-weight-bold">{`Contract #${params.contractId}`}</h1>
          </div>
          <div className="level-item">
            <span className={`tag is-medium ${statusVariant}`}>
              {contracts.status}
            </span>
          </div>
        </div>
        <ContractEditButton />
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
              <p>{`#${params.contractId}`}</p>
            </div>
            <div className="contract__detail">
              <h5>Start Date:</h5>
              <p>{getFormattedDate(contracts.startDate)}</p>
            </div>
            <div className="contract__detail">
              <h5>End Date:</h5>
              <p>{getFormattedDate(contracts.endDate)}</p>
            </div>
            <div className="contract__detail">
              <h5>Contract Amount:</h5>
              <p>{formatPrice(contracts.amount)}</p>
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
                  <span>{contracts.phone}</span>
                </span>
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>
                    <a href={`{mailto:${contracts.email}}`}>
                      {contracts.email}
                    </a>
                  </span>
                </span>
              </div>
            </div>
            <div className="contract__detail">
              <h5>Address</h5>
              <p>{`${contracts.address}`}</p>
              <p>{`${contracts.city}`}</p>
              <p>{`${contracts.state}`}</p>
              <p>{`${contracts.zipcode}`}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="block">
          <h5 className="title is-3">Notes</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis purus et elit tempor, in lacinia elit rhoncus. In lectus
            ipsum, aliquam vel nisi nec, feugiat commodo dui. Cras pretium
            lacinia quam, a sagittis massa blandit at. Donec mollis dui et augue
            tempus, at accumsan quam tristique. Cras aliquam nibh eros, id
            facilisis lectus porttitor ut. Vestibulum ex enim, dapibus eu
            feugiat at, eleifend sit amet felis. Mauris et turpis id felis
            consectetur faucibus. Nulla euismod porttitor arcu, eget convallis
            velit tempus id. Pellentesque pretium egestas tellus vel mollis.
            Etiam viverra hendrerit mi, tempus fermentum libero posuere
            facilisis. Morbi bibendum eros ipsum, vel volutpat purus efficitur
            sit amet. Fusce ac enim elit. Etiam scelerisque semper magna,
            suscipit ornare dui accumsan eget. Sed eu lectus nec est pulvinar
            ultrices. Curabitur euismod felis quis euismod bibendum.
          </p>
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
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    contracts: state,
  };
};

export default connect(mapStateToProps)(ContractSingle);
