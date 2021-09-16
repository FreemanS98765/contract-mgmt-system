import { useState, Fragment } from "react";
import { useField } from "formik";
import { formatPhoneNumber, getFormattedPhone } from "../../utils/utils";

export const TextInput = ({ label, ...props }) => {
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

export const TextareaInput = ({ label, ...props }) => {
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

export const SelectField = ({ label, ...props }) => {
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

export const EmailField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <Fragment>
      <label htmlFor={props.name}>{label}</label>
      <input
        id={props.name}
        className="input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className="error-message">{meta.error}</span>
      ) : null}
    </Fragment>
  );
};

export const PhoneField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  const handleInput = (e) => {
    // setInputValue(prevValues => ({
    //   ...prevValues,
    //   [e.target.name]: e.target.value,
    // }));

    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue(formattedPhoneNumber);
  };

  return (
    <Fragment>
      <label htmlFor={props.name}>{label}</label>
      <input
        id={props.name}
        onKeyDown={(e) => handleInput(e)}
        className="input"
        maxLength={14}
        {...field}
        {...props}
        value={value}
      />
      {meta.touched && meta.error ? (
        <span className="error-message">{meta.error}</span>
      ) : null}
    </Fragment>
  );
};

export default TextInput;
