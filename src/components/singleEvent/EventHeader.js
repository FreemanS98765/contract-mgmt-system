import EventButton from "../events/EventButton";
import { Breadcrumbs, BreadcrumbItem } from "../UI/Breadcrumbs";

const EventHeader = (props) => {
  const event = props.event;
  const statusVariant =
    event.status === "Active"
      ? "is-success"
      : event.status === "Draft"
      ? "is-warning"
      : event.status === "Expired"
      ? "is-danger"
      : "primary";

  return (
    <section className="page-header">
      <div className="container">
        <div className="row">
          <div className="is-flex is-align-items-center">
            <h1 className="is-size-2 mr-3">
              {props.title
                ? `Event ${event.slug}: ${event.title}`
                : `Event ${event.slug}`}
            </h1>
            <span className={`tag is-medium ${statusVariant}`}>
              {event.status}
            </span>
          </div>

          <EventButton
            text="Edit Event"
            onOpenModal={props.openFormModal}
          />
        </div>
        <div className="row">
          <Breadcrumbs className="has-arrow-separator">
            <BreadcrumbItem to={`/dashboard`}>Dashboard</BreadcrumbItem>
            <BreadcrumbItem to={`/events`}>Events</BreadcrumbItem>
            <BreadcrumbItem
              to={`/events/${props.slug}`}
              className="is-active"
            >{`Event ${props.slug}`}</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </section>
  );
};

export default EventHeader;
