import React, { useState, Fragment, useEffect } from "react";
import { Prompt, Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import {
  TextInput,
  TextareaInput,
  SelectField,
  DateField,
  PriceField,
} from "../UI/FormElements";

import { useParams } from "react-router-dom";

import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "../../index.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const EventForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [isDraft, setIsDraft] = useState(false);

  let { id } = useParams();

  const isNewItem = !id;

  const [initialValues, setInitialValues] = useState({
    event: "",
    client: "",
    company: "",
    isSingleDay: false,
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    eventItems: [],
    lastYearsPrice: "",
    upload: "",
    notes: "",
    status: "",
  });

  const validationSchema = yup.object().shape({
    company: yup.string().required("Required"),
    client: yup.string().required("Required"),
  });

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const onDraftClick = () => {
    setIsDraft(true);
  };

  const onSubmit = (fields, { setStatus, setSubmitting, resetForm }) => {
    setStatus();

    if (isDraft) {
      props.onDraftItem(fields, setSubmitting, isNewItem);
    } else {
      props.onSaveItem(fields, setSubmitting, isNewItem, resetForm);
    }
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {function Render(formik) {
          const [eventDetails, setEventDetails] = useState();

          useEffect(() => {
            let mounted = true;
            if (!isNewItem) {
              setTimeout(() => {
                if (mounted) {
                  setInitialValues(props.event);
                }
              }, 500);
            }

            return () => (mounted = false);
          }, []);

          return (
            <Form
              onFocus={formFocusedHandler}
              onSubmit={formik.handleSubmit}
              // noValidate
            >
              <div className="columns">
                <div className="column form-section">
                  <h5 className="form-section_title">Client Info</h5>
                  <div className="field is-grouped">
                    <div className="control is-expanded">
                      <TextInput
                        name="company"
                        type="text"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="control is-expanded">
                      <TextInput
                        name="client"
                        type="text"
                        placeholder="Client name"
                      />
                    </div>
                  </div>

                  {/* end of Client Info */}
                </div>
              </div>
              {/* End of Client Info */}

              <div className="columns">
                <div className="column form-section">
                  <h5 className="form-section_title">Event Info</h5>

                  <div className="field is-grouped">
                    <div className="control is-expanded">
                      <TextInput
                        name="event"
                        type="text"
                        placeholder="Event Name"
                      />
                    </div>
                    <div className="control">
                      <PriceField
                        name="lastYearsPrice"
                        type="number"
                        placeholder="Last Years Price"
                      />
                    </div>
                  </div>

                  <div className="control">
                    <SelectField
                      name="isSingleDay"
                      type="number"
                      placeholder="Last Years Price"
                    >
                      <option>-</option>
                      <option>Yes</option>
                      <option>No</option>
                    </SelectField>
                  </div>

                  <div className="field is-grouped">
                    <div className="control is-expanded">
                      <DateField
                        name="startDate"
                        placeholderText="Start Date"
                        selected={formik.startDate}
                      />
                    </div>
                    <div className="control is-expanded">
                      <TextInput
                        name="startTime"
                        type="text"
                        placeholder="Start Time"
                      />
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control is-expanded">
                      <DateField
                        name="endDate"
                        placeholderText="End Date"
                        selected={formik.endDate}
                      />
                    </div>
                    <div className="control is-expanded">
                      <TextInput
                        name="endTime"
                        type="text"
                        placeholder="End Time"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <TextareaInput
                        name="notes"
                        type="textarea"
                        className="textarea"
                        placeholder="Notes"
                      ></TextareaInput>
                    </div>
                  </div>

                  <div className="form-section">
                    <div className="field">
                      <div className="control">
                        <label className="label">File upload</label>
                        <input
                          id="upload"
                          name="upload"
                          type="file"
                          className="button link"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Event Info */}

              <div className="control-panel">
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <div className="control">
                        <button
                          className="button is-outlined is-white"
                          type="button"
                          onClick={props.onCancel}
                          disabled={formik.isSubmitting}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field-group is-pulled-right">
                      <div className="field is-horizontal">
                        <div className="control">
                          <button
                            className="button is-outlined is-white mr-3"
                            type="submit"
                            onClick={onDraftClick}
                            disabled={formik.isSubmitting}
                          >
                            {formik.isSubmitting && isDraft ? (
                              <div className={classes.loading}>
                                <LoadingSpinner />
                              </div>
                            ) : (
                              "Draft"
                            )}
                          </button>
                        </div>

                        <div className="control">
                          <button
                            className="button is-link"
                            type="submit"
                            disabled={formik.isSubmitting}
                          >
                            {formik.isSubmitting && (
                              <div className={classes.loading}>
                                <LoadingSpinner />
                              </div>
                            )}
                            {props.text}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
};

export default EventForm;
