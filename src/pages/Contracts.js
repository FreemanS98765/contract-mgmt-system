import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getContracts } from "../actions/contracts";

import ContractList from "../components/contracts/ContractList";
import ContractButton from "../components/contracts/ContractButton";
import ContractModal from "../components/contracts/ContractModal.js";

import "bulma/css/bulma.min.css";

// const Contracts = (props) => {
//   //const CONTRACT_DATA = useSelector((state) => state.contacts);
//   const [showModal, setShowModal] = useState(false);
//   //const contracts = props.contracts;

//   console.log("Contracts props are: ", props);

//   // Stores contracts array
//   // const CONTRACT_DATA = props.contracts.contractObj.contracts;
//   const CONTRACT_DATA = props.contracts.contractObj;
//   const DISPATCH_DATA = props.dispatch;
//   const CONTRACT_TABLE_HEADERS = props.contractHeaders;

//   console.log('contract data', CONTRACT_DATA);
//   //console.log('dispatch data', DISPATCH_DATA);

//   const showContractModal = () => {
//     setShowModal(true);
//   };

//   const hideContractModal = () => {
//     setShowModal(false);
//   };

//   // useEffect(() => {
//   //   sendRequest();
//   // }, [sendRequest]);

//   // if (error) {
//   //   return (
//   //     <div className="message is-danger">
//   //       <p className="centered focused">{error}</p>
//   //       <button className="delete" aria-label="delete"></button>
//   //     </div>
//   //   );
//   // }

//   if (
//     CONTRACT_DATA === undefined ||
//     (CONTRACT_DATA && (!CONTRACT_DATA || CONTRACT_DATA.length === 0))
//   ) {
//     return <NoContractsFound />;
//   }

//   return (
//     <div>
//       {console.log("contracts are: ", CONTRACT_DATA)}
//       <div className="page-header flex space-between">
//         <h1 className="is-size-4">Contracts</h1>
//         <ContractButton onShowModal={showContractModal} />
//       </div>

//       <div className="container content">
//         <ContractList
//           contracts={CONTRACT_DATA}
//           isLoading={props.isLoading}
//           dispatchData={DISPATCH_DATA}
//         />
//       </div>

//       {showModal && (
//         //<ContractModal onClose={showContractModal ? "is-active" : "false"} />
//         <ContractModal
//           onHideModal={hideContractModal}
//           onShowModal={showModal}
//           dispatchData={DISPATCH_DATA}
//         />
//       )}
//     </div>
//   );
// };

class Contracts extends Component {
  // static propTypes = {
  //   contracts: PropTypes.object,
  //   getContracts: PropTypes.func.isRequired,
  //   filters: PropTypes.object,
  //   sort: PropTypes.string,
  // };

  state = {
    isLoading: false,
    isOpen: false,
  };

  // componentDidMount() {
  //   this.handleGetContracts();
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { filters: nextFilters, sort: nextSort } = nextProps;

  //   if (nextFilters !== this.props.filters) {
  //     this.handleGetContracts(nextFilters, undefined);
  //   }

  //   if (nextSort !== this.props.sort) {
  //     this.handleGetContracts(undefined, nextSort);
  //   }
  // }

  openFormModal = () => {
    this.setState({ isOpen: true });
  };

  closeFormModal = () => {
    this.setState({ isOpen: false });
  };

  // handleGetContracts = (
  //   filters = this.props.filters,
  //   sort = this.props.sort
  // ) => {
  //   this.setState({ isLoading: true });
  //   this.props.getContracts(filters, sort, () => {
  //     this.setState({ isLoading: false });
  //   });
  // };

  render() {
    console.log("State is now: ", this.state);

    const contracts = this.props.contractState;
    const dispatchData = this.props.dispatchData;
    const { isLoading } = this.state;
    const { isOpen } = this.state;

    console.log("Contracts are: ", contracts);

    return (
      <div>
        <div className="page-header flex space-between">
          <h1 className="is-size-4">Contracts</h1>
          <ContractButton onShowModal={this.openFormModal} />
        </div>

        <div className="container content">
          <ContractList
            contracts={contracts}
            isLoading={isLoading}
            dispatchData={dispatchData}
          />
        </div>

        {console.log('isOpen: ', isOpen)}

        {isOpen && (
          //<ContractModal onClose={showContractModal ? "is-active" : "false"} />
          <ContractModal
            onHideModal={this.closeFormModal}
            onShowModal={this.openFormModal}
            dispatchData={dispatchData}
            isOpen={isOpen}
            
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contractState: state.contracts,
  filters: state,
  sort: state,
  dispatchData: state.dispatch,
});

export default connect(mapStateToProps)(Contracts);
