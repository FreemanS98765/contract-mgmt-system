import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import EventForm from "./EventForm";
import useHttp from "../../hooks/use-http";

import { addEvent, editEvent } from "../../actions/events";

const EventModal = (props) => {
  const { sendRequest, loadingStatus } = useHttp(addEvent);
  const history = useHistory();

  const event = props.event;

  // useEffect(() => {
  //   if (loadingStatus === "completed") {
  //     history.push("/contracts");
  //     props.onHideModal();
  //   }
  // }, [loadingStatus, history]);

  const saveItemHandler = async (
    fields,
    setSubmitting,
    isNewItem,
    resetForm
  ) => {
    //await new Promise((r) => setTimeout(r, 1000));

    const savedData = {
      ...fields,
      status: "Active",
    };

    if (isNewItem) {
      props
        .dispatchData(addEvent(savedData))
        .then(() => {
          //history.push(".");
        })
        .catch((error) => {
          setSubmitting(false);
          console.log(error);
        });

      resetForm();
    } else {
      updateItemHandler(fields.id, savedData, setSubmitting);
    }

    props.onHideModal();
  };

  const draftItemHandler = (fields, setSubmitting, isNewItem) => {
    //await new Promise((r) => setTimeout(r, 1000));

    const draftedData = {
      ...fields,
      status: "Draft",
    };

    if (isNewItem) {
      props
        .dispatchData(addEvent(draftedData))
        .then(() => {
          //history.push(".");
        })
        .catch((error) => {
          console.log(error);
          setSubmitting(false);
        });
    } else {
      updateItemHandler(fields.id, draftedData, setSubmitting);
    }

    props.onHideModal();
  };

  const updateItemHandler = (id, fields, setSubmitting) => {
    // Update item data
    props
      .dispatchData(editEvent(id, fields))
      .then(() => {
        //history.push(".");
      })
      .catch((error) => {
        console.log(error);
      });
    props.onHideModal();
  };

  return (
    <div className={`modal ${props.isOpen === true ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {props.type === "edit" ? "Update Event" : "New Event"}
          </p>
        </header>
        <section className="modal-card-body">
          <EventForm
            type={props.type}
            onSaveItem={saveItemHandler}
            onUpdateItem={updateItemHandler}
            onDraftItem={draftItemHandler}
            onCancel={props.onHideModal}
            isLoading={loadingStatus === "pending"}
            text={props.text}
            event={event}
            dispatchData={props.dispatchData}
          />
        </section>
      </div>
      <button
        onClick={props.onHideModal}
        className="modal-close is-large"
        aria-label="close"
      />
    </div>
  );
};

export default EventModal;
