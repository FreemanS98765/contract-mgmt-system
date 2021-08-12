import { Fragment } from "react";
import { useField } from "formik";

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

export default TextInput;
