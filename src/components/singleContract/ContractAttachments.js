import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../Social_Avatar.png";

const ContractAttachments = (props) => {
  console.log("Uploads are: ", props.upload[0]);

  const upload = props.upload[0];
  const domain = "http://localhost:3000/";

  const image = `/${props.upload[0].filename}`;
  //const image = `http://localhost:3000/public/assets/tmp/Social_Avatar.png`;

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
          <img src={`../uploads${image}`} alt={upload.filename} width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default ContractAttachments;
