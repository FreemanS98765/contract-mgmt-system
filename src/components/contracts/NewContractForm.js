import React, { useState, useRef } from "react";
import { useFormik, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validate = (values) => {
  const errors = {};

  if (!values.company) {
    errors.company = "Required";
  }

  if (!values.client) {
    errors.client = "Required";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address format";
  }

  if (values.zipcode.length !== 5) {
    errors.zipcode = "Must be 5 characters";
  }

  return errors;
};

const NewContractForm = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const formik = useFormik({
    initialValues: {
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
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form id="new-contract" onSubmit={formik.handleSubmit}>
      <div className="columns">
        <div className="column form-section">
          <h5 className="form-section_title">Client Info</h5>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input
                id="company"
                name="company"
                type="text"
                {...formik.getFieldProps('company')}
                className="input"
                placeholder="Company name"
              />
              {formik.touched.company && formik.errors.company ? (
                <span className="error-message">{formik.errors.company}</span>
              ) : null}
            </div>
            <div className="control is-expanded">
              <input
                id="client"
                name="client"
                type="text"
                {...formik.getFieldProps('client')}
                className="input"
                placeholder="Client name"
              />
              {formik.touched.client && formik.errors.client ? (
                <span className="error-message">{formik.errors.client}</span>
              ) : null}
            </div>

            <div className="control is-expanded">
              <input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
                className="input"
                placeholder="Client email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="error-message">{formik.errors.email}</span>
              ) : null}
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                id="address"
                name="address"
                type="text"
                {...formik.getFieldProps('address')}
                className="input"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <input
                id="city"
                name="city"
                type="text"
                {...formik.getFieldProps('city')}
                className="input"
                placeholder="City"
              />
            </div>

            <div className="control">
              <div className="select">
                <select
                  id="state"
                  name="state"
                  form="new-contract"
                  {...formik.getFieldProps('state')}
                >
                  <option>Alaska</option>
                  <option>New Hampshire</option>
                </select>
              </div>
            </div>

            <div className="control">
              <input
                id="zipcode"
                name="zipcode"
                type="number"
                {...formik.getFieldProps('zipcode')}
                className="input"
                placeholder="Zipcode"
              />
              {formik.touched.zipcode && formik.errors.zipcode ? (
                <span className="error-message">{formik.errors.zipcode}</span>
              ) : null}
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
              <input
                id="contract"
                name="contract"
                type="text"
                {...formik.getFieldProps('contract')}
                className="input"
                placeholder="Contract Name"
              />
            </div>

            <div className="control">
              <DatePicker
                name="startDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                onBlur={formik.handleBlur}
                className="input is-normal"
                placeholderText="Start Date"
              />
            </div>
            <div className="control">
              <DatePicker
                name="endDate"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                onBlur={formik.handleBlur}
                className="input is-normal"
                placeholderText="End Date"
              />
            </div>
            <div className="control">
              <input
                id="amount"
                name="amount"
                type="text"
                {...formik.getFieldProps('amount')}
                className="input"
                placeholder="Amount"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                id="notes"
                name="notes"
                type="textarea"
                {...formik.getFieldProps('notes')}
                class="textarea"
                placeholder="Notes"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">File upload</label>
              <input
                id="upload"
                name="upload"
                type="file"
                {...formik.getFieldProps('upload')}
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
                <button className="button is-outlined is-white" type="button">
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
    </form>
  );
};

export default NewContractForm;
