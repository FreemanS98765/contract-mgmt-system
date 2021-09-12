import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { Formik, Form, useField, useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import { TextInput, TextareaInput, SelectField } from "../UI/FormElements";

import useHttp from "../../hooks/use-http";
import { addContract } from "../../actions/contracts";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Prompt } from "react-router-dom";

import classes from "../../index.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const NewContractForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const phoneRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
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
        initialValues={{
          company: "",
          client: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          title: "",
          startDate: "",
          endDate: "",
          price: 0,
          upload: "",
          status: "",
        }}
        validationSchema={yup.object({
          company: yup.string().required("Required"),
          client: yup.string().required("Required"),
          phone: yup.string().matches(phoneRegex, "Phone number is invalid."),
          email: yup.string().email("Invalid email address"),
          zipcode: yup
            .string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(5, "Must be exactly 5 digits")
            .max(5, "Must be exactly 5 digits"),
        })}
        onSubmit={(contracts, action) => {
          //await sleep(1000);



          //props.dispatch(addContract(contracts));
          
          props.onSaveContractData(contracts);
          props.history.push("/");

          // setTimeout(() => {
          //   props.dispatch(addContract(contracts));
          //   action.setStatus("sent");
          //   props.history.push("/");
          //   console.log("Sent!");
          // }, 1000);
        }}
      >
        {(formik) => (
          <Form
            // onFocus={formFocusedHandler}
            onSubmit={formik.handleSubmit}
            // noValidate
          >
            {props.isLoading && (
              <div className={classes.loading}>
                <LoadingSpinner />
              </div>
            )}

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

                  <div className="control is-expanded">
                    <TextInput
                      name="email"
                      type="email"
                      placeholder="Client email"
                    />
                  </div>
                  <div className="control is-expanded">
                    <TextInput
                      name="phone"
                      type="text"
                      placeholder="Client phone"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <TextInput
                      name="address"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <TextInput name="city" type="text" placeholder="City" />
                  </div>

                  <div className="control">
                    <SelectField name="state">
                      <option>Alaska</option>
                      <option>New Hampshire</option>
                    </SelectField>
                  </div>

                  <div className="control">
                    <TextInput
                      name="zipcode"
                      type="text"
                      placeholder="Zipcode"
                    />
                  </div>
                </div>
                {/* end of Client Info */}
              </div>
            </div>
            {/* End of Client Info */}

            <div className="columns">
              <div className="column form-section">
                <h5 className="form-section_title">Contract Info</h5>

                <div className="field is-grouped">
                  <div className="control is-expanded">
                    <TextInput
                      name="contract"
                      type="text"
                      placeholder="Contract Name"
                    />
                  </div>
                  <div className="control">
                    <TextInput
                      name="amount"
                      type="number"
                      placeholder="Amount"
                    />
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <SelectField name="category">
                      <option>Maintenance</option>
                      <option>Project</option>
                    </SelectField>
                  </div>

                  <div className="control">
                    <SelectField name="level">
                      <option>Easy</option>
                      <option>Medium</option>
                    </SelectField>
                  </div>

                  <div className="control is-expanded">
                    <DatePicker
                      name="startDate"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      onBlur={formik.handleBlur}
                      className="input is-normal"
                      placeholderText="Start Date"
                    />
                  </div>
                  <div className="control is-expanded">
                    <DatePicker
                      name="endDate"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      onBlur={formik.handleBlur}
                      className="input is-normal"
                      placeholderText="End Date"
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
                        {...formik.getFieldProps("upload")}
                        className="button link"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Contract Info */}

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
                          onClick={props.onDraftContractData}
                          disabled={formik.isSubmitting}
                        >
                          Draft
                        </button>
                      </div>

                      <div className="control">
                        <button
                          className="button is-link"
                          type="submit"
                          disabled={formik.isSubmitting}
                        >
                          Create Contract
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default connect()(NewContractForm);
