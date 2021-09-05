import { useDispatch } from "react-redux";
import { uiActions } from "../../reducers/ui-slice";

const ContractEditButton = (props) => {

  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleNewContract());
  };

  return (
    <button onClick={toggleButtonHandler} className="button is-primary">
      Edit Contract
    </button>
  );
};

export default ContractEditButton;
