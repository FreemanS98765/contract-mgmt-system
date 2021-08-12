import React, { useState, useRef, Fragment, useEffect } from "react";
import { Formik, Form, useField, useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";

import { TextInput, TextareaInput, SelectField } from "../UI/FormElements";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const NewContractForm = (props) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [saveStatus, setSaveStatus] = useState('')

  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleNewContract());
  };

  const draftButtonHandler = async (values) => {
    await new Promise((r) => setTimeout(r, 500));

    const newValues = {
      ...values,
      status: "Draft",
    };
    console.log(values);
    props.onSaveContractData(newValues);
  };

  return (
    <Formik
      initialValues={{
        company: "",
        client: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        contract: "",
        startDate: "",
        endDate: "",
        amount: 0,
        upload: "",
        status: "",
      }}
      validationSchema={yup.object({
        company: yup.string().required("Required"),
        client: yup.string().required("Required"),
        email: yup.string().email("Invalid email address"),
        zipcode: yup
          .string()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(5, "Must be exactly 5 digits")
          .max(5, "Must be exactly 5 digits"),
      })}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));

        const newValues = {
          ...values,
          status: "Active",
        };

        console.log(newValues);
        props.onSaveContractData(newValues);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} noValidate>
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
                  <TextInput name="amount" type="number" placeholder="Amount" />
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
                        onClick={() => draftButtonHandler(formik.values)}
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
