import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import ContractEditButton from "../components/contracts/ContractEditButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBook } from "@fortawesome/free-solid-svg-icons";

import { CONTRACT_DATA } from "../data/data";

const ContractSingle = (props) => {
  const params = useParams();

  const contracts = CONTRACT_DATA.find(
    (contract) => contract.id.toString() === params.contractId
  );

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
            <span className="tag is-success is-medium">Active</span>
          </div>
        </div>
        <ContractEditButton />
      </div>
      <div className="mt-3">
        <nav
          className="breadcrumb has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Contracts</a>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                Contract Details
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="block">
                <h3 className="is-size-3 has-text-weight-bold">
                  Contract Details
                </h3>
              </div>
              <div className="block">
                <h5 className="subtitle is-5">Contract ID</h5>
                <p>{`#${params.contractId}`}</p>
              </div>
              <div className="block">
                <h5 className="subtitle is-5">Start Date</h5>
                <p>{`#${params.contractId}`}</p>
              </div>
              <div className="block">
                <h5 className="subtitle is-5">End Date</h5>
                <p>{`#${params.contractId}`}</p>
              </div>
              <div className="block">
                <h5 className="subtitle is-5">Contract Amount</h5>
                <p>{`#${params.contractId}`}</p>
              </div>
              <div className="block">
                <h5 className="subtitle is-5">Contract Status</h5>
                <p>{`#${params.contractId}`}</p>
              </div>
            </div>
            <div className="column">
              <div className="block">
                <h3 className="is-size-3 has-text-weight-bold">
                  Client Details
                </h3>
              </div>

              <div className="block">
                <h5 className="subtitle is-5">Client</h5>
                <p>{`#${params.contractId}`}</p>
              </div>
              <div className="block">
                <h5 className="subtitle is-5">Company</h5>
                <p>{`#${params.contractId}`}</p>
              </div>
              <div className="block">
                <h5 className="subtitle is-5">Contact Information</h5>
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span>(603) 264-3904</span>
                </span>
              </div>
              <div className="block">
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>
                    <a href="mailto:freeman@danfreedesign.com">
                      Freeman@danfreedesign.com
                    </a>
                  </span>
                </span>
              </div>
              <div className="block">
                <h5 className="subtitle is-5">Address</h5>
                <p>{`#${params.contractId}`}</p>
              </div>
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

export default ContractSingle;
