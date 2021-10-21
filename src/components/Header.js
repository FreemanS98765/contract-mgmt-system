import ContractButton from "./contracts/ContractButton";
import EventButton from "./events/EventButton";

const Header = (props) => {
  const getTemplate = (title) => {
    if (title === "Contracts") {
      return (
        <ContractButton text="New Contract" onOpenModal={props.onOpenModal} />
      );
    } else if (title === "Events") {
      return <EventButton text="New Event" onOpenModal={props.onOpenModal} />;
    }
    return;
  };

  return (
    <header className="page-header">
      <div className="container">
        <div className="row">
          <h1 className="is-size-2">{props.title}</h1>
          {getTemplate(props.title)}
        </div>
      </div>
    </header>
  );
};

export default Header;
