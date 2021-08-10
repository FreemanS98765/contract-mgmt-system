import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const ContractButton = (props) => {
  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleNewContract());
  };

  return (
    <button onClick={toggleButtonHandler} className="button is-primary">
      Create Contract
    </button>
  );
};

export default ContractButton;
