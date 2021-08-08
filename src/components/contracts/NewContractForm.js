import React, { useState, useRef } from "react";
import { useFormik, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      status: "",
    },
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
                onChange={formik.handleChange}
                value={formik.values.company}
                className="input"
                placeholder="Company name"
              />
            </div>
            <div className="control is-expanded">
              <input
                id="client"
                name="client"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.client}
                className="input"
                placeholder="Client name"
              />
            </div>

            <div className="control is-expanded">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="input"
                placeholder="Client email"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
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
                onChange={formik.handleChange}
                value={formik.values.city}
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
                  onChange={formik.handleChange}
                  value={formik.values.state}
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
                onChange={formik.handleChange}
                value={formik.values.zipcode}
                className="input"
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
              <input
                id="contract"
                name="contract"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.contract}
                className="input"
                placeholder="Contract Name"
              />
            </div>

            <div className="control">
              <DatePicker
                name="startDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input is-normal"
                placeholderText="Start Date"
              />
            </div>
            <div className="control">
              <DatePicker
                name="endDate"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="input is-normal"
                placeholderText="End Date"
              />
            </div>
            <div className="control">
              <input
                id="amount"
                name="amount"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.amount}
                className="input"
                placeholder="Amount"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea class="textarea" placeholder="Notes"></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">File upload</label>
              <input className="button link" type="file" name="upload" />
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
