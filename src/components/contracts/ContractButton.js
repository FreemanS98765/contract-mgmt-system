import { useDispatch } from "react-redux";
import { uiActions } from "../../reducers/uiSlice";

const ContractButton = (props) => {
  return (
    <button onClick={props.onOpenModal} className="button btn has-shadow is-success is-medium">
      {props.text}
    </button>
  );
};

export default ContractButton;
