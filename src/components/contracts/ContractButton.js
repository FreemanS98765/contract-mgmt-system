import { useDispatch } from "react-redux";
import { uiActions } from "../../reducers/uiSlice";

const ContractButton = (props) => {

  return (
    <button onClick={props.onShowModal} className="button is-primary">
      Create Contract
    </button>
  );
};

export default ContractButton;
