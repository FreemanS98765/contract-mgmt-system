import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const ContractAttachments = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="column">
          <div className="block">
            <h5 className="title is-3">Attachments</h5>
            <span className="icon is-large">
              <FontAwesomeIcon className="fas fa-2x" icon={faBook} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractAttachments;
