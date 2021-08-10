import React, { useState, useRef, Fragment } from "react";
import { Formik, Form, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error-message">{meta.error}</span>
      ) : null}
    </Fragment>
  );
};

const TextareaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="textarea" {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <span className="error-message">{meta.error}</span>
      ) : null}
    </Fragment>
  );
};

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <div className="select">
        <select {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <span className="error-message">{meta.error}</span>
      ) : null}
    </div>
  );
};

const NewContractForm = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleNewContract());
  };

  return (
    <Formik
      initialValues={{
        company: "",
        client: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        contract: "",
        startDate: "",
        endDate: "",
        amount: "",
        upload: "",
        status: "",
      }}
      validationSchema={yup.object({
        company: yup.string().required("Required"),
        client: yup.string().required("Required"),
        email: yup.string().email("Invalid email address").required("Required"),
        zipcode: yup
          .string()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(5, "Must be exactly 5 digits")
          .max(5, "Must be exactly 5 digits"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form>
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
              </div>

              <div className="field">
                <div className="control">
                  <TextInput name="address" type="text" placeholder="Address" />
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
                  <TextInput name="zipcode" type="text" placeholder="Zipcode" />
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
                  <TextInput name="amount" type="text" placeholder="Amount" />
                </div>
              </div>

              <div className="field is-grouped">
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
          {/* End of Contract Info */}

          <div className="control-panel">
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <button
                      className="button is-outlined is-white"
                      type="button"
                      onClick={toggleButtonHandler}
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
                        type="button"
                      >
                        Draft
                      </button>
                    </div>

                    <div className="control">
                      <button className="button is-link" type="submit">
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
  );
};

export default NewContractForm;
