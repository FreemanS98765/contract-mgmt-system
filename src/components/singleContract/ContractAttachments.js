import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const ContractAttachments = (props) => {
  console.log("Uploads are: ", props.upload[0]);

  const upload = props.upload[0];

  const image = upload.filename;

  return (
    <div className="box">
      <div className="container">
        <div className="column">
          <div id="attachments" className="block entry-title">
            <h4 className="title">Attachments</h4>
          </div>
          <span className="icon is-large">
            <FontAwesomeIcon className="fas fa-2x" icon={faBook} />
          </span>
          <img src={image} alt={upload.filename} width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default ContractAttachments;
