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
      <div className="container">
        <div className="row">
          <div className="is-flex is-align-items-center">
            <h1 className="is-size-2 mr-3">
              {props.title
                ? `Contract #${props.slug}: ${props.contract.title}`
                : `Contract #${props.slug}`}
            </h1>
            <span className={`tag is-medium ${statusVariant}`}>
              {props.contract.status}
            </span>
          </div>

          <ContractButton
            text="Edit Contract"
            onOpenModal={props.openFormModal}
          />
        </div>
        <div className="row">
          <Breadcrumbs className="has-arrow-separator">
            <BreadcrumbItem to={`/dashboard`}>Dashboard</BreadcrumbItem>
            <BreadcrumbItem to={`/contracts`}>Contracts</BreadcrumbItem>
            <BreadcrumbItem
              to={`/contracts/${props.slug}`}
              className="is-active"
            >{`Contract #${props.slug}`}</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </section>
  );
};

export default ContractHeader;
