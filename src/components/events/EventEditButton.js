import { useDispatch } from "react-redux";
import { uiActions } from "../../reducers/uiSlice";

const EventEditButton = (props) => {

  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleNewItem());
  };

  return (
    <button onClick={toggleButtonHandler} className="button is-primary">
      Edit Event
    </button>
  );
};

export default EventEditButton;