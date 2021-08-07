import { Fragment } from "react";

import ContractItem from "./ContractItem";

import "bulma/css/bulma.min.css";
import classes from "./ContractList.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const ContractList = (props) => {

  const filterIcon = <FontAwesomeIcon icon={faAngleDown} />
  const searchIcon = <FontAwesomeIcon icon={faSearch} />

  return (
    <Fragment>
      <div className="filters-toolbar mb-4">
        <div className="flex space-between">
          <div className="field is-grouped">
            <div className="dropdown mr-4">
              <div className="dropdown-trigger">
                <button
                  className="button is-outlined is-medium"
                  aria-haspopup="true"
                  aria-controls="status-menu"
                >
                  <span>Status: All</span>
                  <span className="icon is-small">
                    {filterIcon}
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="status-menu" role="menu">
                <div className="dropdown-content">
                  <a className='dropdown-item' href="#all">All</a>
                  <a className='dropdown-item' href="#draft">Draft</a>
                  <a className='dropdown-item' href="#expired">Expired</a>
                </div>
              </div>
            </div>

            <div className="dropdown mr-4">
              <div className="dropdown-trigger">
                <button
                  className="button is-outlined is-medium"
                  aria-haspopup="true"
                  aria-controls="date-menu"
                >
                  <span>Date: All</span>
                  <span className="icon is-small">
                    {filterIcon}
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="date-menu" role="menu">
                <div className="dropdown-content">
                  <a className='dropdown-item' href="#all">All</a>
                  <a className='dropdown-item' href="#draft">This month</a>
                  <a className='dropdown-item' href="#expired">Last month</a>
                </div>
              </div>
            </div>

            <p className='control has-icons-right'>

              <input className='input is-medium' type='text' placeholder='Search contracts...' />
              <span className='icon is-small is-right'>
                {searchIcon}
              </span>
            </p>

          </div>
          <span title="Download" className="invoice-icon">
            Download
          </span>
        </div>
      </div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            {props.contractHeaders.map((header) => {
              return <th>{header.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.contracts.map((contract) => (
            <ContractItem
              contract={contract}
              key={contract.id}
              id={contract.id}
              startDate={contract.startDate}
              endDate={contract.endDate}
              contractName={contract.contractName}
              client={contract.client}
              amount={contract.amount}
              status={contract.status}
              action={contract.action}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ContractList;
