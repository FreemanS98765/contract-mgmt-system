import NewContractForm from "./NewContractForm";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const ContractModal = (props) => {
  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleNewContract());
  };

  return (
    <div className={`modal ${props.toggleModal}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">New Contract</p>
        </header>
        <section className="modal-card-body">
          <NewContractForm />
        </section>
      </div>
      <button onClick={toggleButtonHandler} className="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default ContractModal;
