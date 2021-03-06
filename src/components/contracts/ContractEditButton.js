import { useDispatch } from "react-redux";
import { uiActions } from "../../reducers/uiSlice";

const ContractEditButton = (props) => {

  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleNewItem());
  };

  return (
    <button onClick={toggleButtonHandler} className="button is-primary">
      Edit Contract
    </button>
  );
};

export default ContractEditButton;