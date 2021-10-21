import React, { useState } from "react";
import { connect } from "react-redux";

import { Fragment } from "react";
import { useParams, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import ContractHeader from "../components/singleContract/ContractHeader";
import ClientDetails from "../components/singleContract/ClientDetails";
import ContractDetails from "../components/singleContract/ContractDetails";
import ContractAttachments from "../components/singleContract/ContractAttachments";

import ContractModal from "../components/contracts/ContractModal.js";

const ContractSingle = (props) => {
  const dispatchData = props.dispatch;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  let { slug, id } = useParams();
  let upload = [];

  let hashLinks = [
    {
      to: "#contractDetails",
      text: "Contract Details",
    },
    {
      to: "#clientDetails",
      text: "Client Details",
    },
    {
      to: "#attachments",
      text: "Attachments",
    },
  ];

  const contracts = props.contracts;

  let contract = contracts.find((c) => {
    return c.slug === slug;
  });

  const uploads = props.uploads;

  if (!uploads.length) {
    return 'No attachments found';
  } else {
    upload = uploads.map((c) => {
      return c.filename === contract.upload ? c : "";
    });
  }

  const openFormModal = () => {
    setIsOpen(true);
  };

  const closeFormModal = () => {
    setIsOpen(false);
  };

  const handleHashClick = (index) => {
    setActiveLink(index);
  };

  if (!contract) {
    return <p>Contract not found!</p>;
  }

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
                    {hashLinks.map((link, index) => {
                      return (
                        <li key={index}>
                          <HashLink
                            className={index === activeLink ? "is-active" : ""}
                            smooth
                            to={link.to}
                            onClick={() => handleHashClick(index)}
                          >
                            {link.text}
                          </HashLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-three-quarters">
              <ContractDetails contract={contract} />
              <ClientDetails contract={contract} />
              <ContractAttachments upload={upload} slug={slug} />
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
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
    uploads: state.uploads,
  };
};

export default connect(mapStateToProps)(ContractSingle);
