import ContractButton from "./contracts/ContractButton";
//import { Breadcrumbs, BreadcrumbItem } from "./UI/Breadcrumbs";

const Header = (props) => {
  return (
    <header className="page-header">
      <div className="container">
        <div className="row">
          <h1 className="is-size-2">Contracts</h1>

          <ContractButton text="New Contract" onOpenModal={props.onOpenModal} />
        </div>
        {/* <div className="row">
          <Breadcrumbs className="has-arrow-separator">
            <BreadcrumbItem to={`/dashboard`}>Dashboard</BreadcrumbItem>
            <BreadcrumbItem to={`/contracts`}>Contracts</BreadcrumbItem>
            <BreadcrumbItem
              to={`/contracts/${props.id}`}
              className="is-active"
            >{`Contract #${props.id}`}</BreadcrumbItem>
          </Breadcrumbs>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
