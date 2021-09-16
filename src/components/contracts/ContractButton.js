import { useDispatch } from "react-redux";
import { uiActions } from "../../reducers/uiSlice";

const ContractButton = (props) => {
  return (
    <button onClick={props.onOpenModal} className="button is-primary">
      {props.text}
    </button>
  );
};

export default ContractButton;
