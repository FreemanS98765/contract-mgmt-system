import { useState, Fragment } from "react";
import { useField, useFormikContext } from "formik";
import { formatPhoneNumber, getFormattedPhone } from "../../utils/utils";
import DatePicker from "react-datepicker";

import UploadThumb from "../UI/UploadThumb";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

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
      <input id={props.name} className="input" {...field} {...props} />
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

export const PriceField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { value } = meta;
  const { setValue } = helpers;

  // const handleChange = (p) => {
  //   console.log(`P is: ${p}`);
  //   let formattedPrice = `${p}`;
  //   setValue(formattedPrice);
  // };

  return (
    <Fragment>
      <label htmlFor={props.name}>{label}</label>
      <input className="input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error-message">{meta.error}</span>
      ) : null}
    </Fragment>
  );
};

export const DateField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta, helpers] = useField(props);

  const { value } = meta;
  const { setValue } = helpers;

  const handleChange = (d) => {
    // const month = e.getMonth() + 1;
    // month = month.slice(-2);
    // const day = e.getDate().slice(-2);
    // const year = e.getFullYear();

    let dDate = [
      ("0" + (d.getMonth() + 1)).slice(-2),
      ("0" + d.getDate()).slice(-2),
      d.getFullYear(),
    ].join("-");
    let formattedDate = `${dDate}`;

    // const formatDate = (m, d, y) => {
    //   if (m < 10 || d < 10) {
    //     return `0${month}-0${day}-${year}`;
    //   }

    //   return `${month}-${day}-${year}`;
    // };

    setValue(formattedDate);
  };

  return (
    <DatePicker
      {...field}
      {...props}
      name={field.name}
      selected={field.selected}
      className="input"
      onChange={(date) => handleChange(date)}
      placeholderText={field.placeholderText}
      value={value}
    />
  );
};

export const UploadInput = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [selected, setSelected] = useState(undefined);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setFieldValue("files", file);
    setSelected(file);
  };

  const handleRemoveFile = () => {
    props.onChange(props.id);
  };

  const fileUploadHandler = () => {};

  return (
    <div className="file">
      <div>
        {/* {props.value !== "" && progress === -1 && (
          <UploadThumb path={props.value} />
        )} */}
      </div>
      {/* {props.value && (
        <a className="button" role="button" onClick={handleRemoveFile}>
          Remove
        </a>
      )} */}
      <div>
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="files"
            id="upload"
            onChange={handleFileChange}
          />
          <span className="file-cta">
            <span className="file-icon">
              <FontAwesomeIcon size="lg" icon={faUpload} />
            </span>
            <span className="file-label">Choose a file...</span>
          </span>
          <span className="file-name">File name</span>
        </label>
        <UploadThumb file={selected} />
      </div>
    </div>
  );
};

export default TextInput;
