import ContractButton from "../contracts/ContractButton";
import { Breadcrumbs, BreadcrumbItem } from "../../components/UI/Breadcrumbs";

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
    <section className="page-header">
      <div className="level">
        <div className="level-item level-left">
          <h1 className="title is-3 has-text-weight-bold">
            {props.title
              ? `Contract #${props.contract.id}: ${props.contract.title}`
              : `Contract #${props.contract.id}`}
          </h1>
          <span className={`tag is-medium ${statusVariant}`}>
            {props.contract.status}
          </span>
        </div>
        
        <div className="level-item level-right">
          <ContractButton
            text="Edit Contract"
            onOpenModal={props.openFormModal}
          />
        </div>
      </div>

      <div className="level">
        <div className="level-item level-left">
          <Breadcrumbs className="has-arrow-separator">
            <BreadcrumbItem to={`/dashboard`}>Dashboard</BreadcrumbItem>
            <BreadcrumbItem to={`/contracts`}>Contracts</BreadcrumbItem>
            <BreadcrumbItem
              to={`/contracts/${props.id}`}
              className="is-active"
            >{`Contract #${props.id}`}</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </section>
  );
};

export default ContractHeader;
