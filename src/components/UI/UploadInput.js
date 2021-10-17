import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const UploadInput = (props) => {
  const [filename, setFileName] = useState("");

  const setFile = (event) => {
    props.formik.setFieldValue("file", event.target.files[0]);
    props.formik.setFieldValue("upload", event.target.files[0].name);
    setFileName(event.target.files[0].name);
  };

  return (
    <div className="file">
      <label className="file-label">
        <input
          className="file-input"
          type="file"
          name="files"
          id="files"
          onChange={setFile}
        />
        <span className="file-cta">
          <span className="file-icon">
            <FontAwesomeIcon size="lg" icon={faUpload} />
          </span>
          <span className="file-label">Choose a file...</span>
        </span>
        <span className="file-name">
          {filename !== undefined ? filename : "None found"}
        </span>
      </label>
    </div>
  );
};

export default UploadInput;
