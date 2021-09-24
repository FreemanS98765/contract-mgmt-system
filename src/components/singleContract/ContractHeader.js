import ContractButton from "../contracts/ContractButton";

const ContractHeader = (props) => {
  const statusVariant =
    props.contract.status === "Active"
      ? "is-success"
      : props.contract.status === "Draft"
      ? "is-warning"
      : props.contract.status === "Expired"
      ? "is-danger"
      : "primary";

  return (
    <div className="page-header flex space-between">
      <div className="level">
        <div className="level-item mr-3">
          <h1 className="title is-3 has-text-weight-bold">
            {props.title ? `Contract #${props.contract.id}: ${props.contract.title}` : `Contract #${props.contract.id}`}
          </h1>
        </div>
        <div className="level-item">
          <span className={`tag is-medium ${statusVariant}`}>{props.contract.status}</span>
        </div>
      </div>
      <ContractButton text="Edit Contract" onOpenModal={props.openFormModal} />
    </div>
  );
};

export default ContractHeader;
