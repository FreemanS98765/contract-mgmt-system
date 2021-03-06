import React, { useState, Fragment, useEffect } from "react";
import { Prompt, Link } from "react-router-dom";

import { fetchContract } from "../../actions/contracts";

import { Formik, Form } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import {
  TextInput,
  TextareaInput,
  SelectField,
  PhoneField,
  EmailField,
  DateField,
  PriceField,
  UploadInput,
} from "../UI/FormElements";

import { useParams } from "react-router-dom";

import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "../../index.css";

const ContractForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [isDraft, setIsDraft] = useState(false);

  const { id, slug } = useParams();
  const isNewContract = !slug;

  const [initialValues, setInitialValues] = useState({
    slug: "",
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
    price: "",
    upload: "",
    notes: "",
    status: "",
    files: null,
    filename: "",
  });

  useEffect(() => {
    if (!isNewContract) {
      setInitialValues(props.contract);
    }
  }, [isNewContract, props.contract]);

  const validationSchema = yup.object().shape({
    company: yup.string(),
    client: yup.string(),
    phone: yup.string(),
    email: yup.string().email("Invalid email address").max(255),
    zipcode: yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Must be exactly 5 digits")
      .max(5, "Must be exactly 5 digits"),
    file: yup.mixed(),
  });

  const phoneRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const onDraftClick = () => {
    setIsDraft(true);
  };

  const onSubmit = (fields, { setStatus, setSubmitting }) => {
    setStatus();

    if (isNewContract) {
      props.onSaveContractData(fields, setSubmitting);
    } else if (isNewContract && isDraft) {
      props.onDraftContractData(fields, setSubmitting);
    } else {
      props.onUpdateContractData(slug, fields, setSubmitting);
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
          const [contract, setContract] = useState({});

          // useEffect(() => {
          //   let mounted = true;
          //   if (!isNewContract) {
          //     setTimeout(() => {
          //       if (mounted) {
          //         setInitialValues(props.contract);
          //       }
          //     }, 500);
          //   }

          //   return () => (mounted = false);
          // }, []);

          // useEffect(() => {
          //   if (!isNewContract) {
          //     // get contract and set form fields
          //     props.dispatchData(fetchContract(id)).then((contract) => {
          //       const fields = [
          //         "company",
          //         "client",
          //         "email",
          //         "phone",
          //         "address",
          //         "city",
          //         "state",
          //         "zipcode",
          //         "title",
          //         "startDate",
          //         "endDate",
          //         "price",
          //         "upload",
          //         "notes",
          //         "status",
          //         "files",
          //         "filename",
          //       ];
          //       fields.forEach((field) =>
          //         formik.setFieldValue(field, contract[field], false)
          //       );
          //       setContract(contract);
          //     });
          //   }
          // }, [formik]);

          return (
            <Form
              onFocus={formFocusedHandler}
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
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

                    <div className="control is-expanded">
                      <EmailField
                        name="email"
                        type="email"
                        placeholder="Client email"
                      />
                    </div>
                    <div className="control is-expanded">
                      <PhoneField
                        name="phone"
                        type="tel"
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
                        name="title"
                        type="text"
                        placeholder="Contract Name"
                        required
                      />
                    </div>
                    <div className="control">
                      <PriceField
                        name="price"
                        type="number"
                        placeholder="Price"
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
                      <DateField
                        name="startDate"
                        placeholderText="Start Date"
                        selected={formik.startDate}
                      />
                    </div>
                    <div className="control is-expanded">
                      <DateField
                        name="endDate"
                        placeholderText="End Date"
                        selected={formik.endDate}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <TextareaInput
                        name="notes"
                        type="textarea"
                        placeholder="Notes"
                      ></TextareaInput>
                    </div>
                  </div>

                  <div className="form-section">
                    <div className="field">
                      <div className="control">
                        <UploadInput upload={props.upload} />
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

export default ContractForm;
