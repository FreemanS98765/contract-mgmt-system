const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "pending") {
    return (
      <span className="is-warning">{props.status}</span>
    )
  }
  if (props.status === "expired") {
    return (
      <span className="is-danger">{props.status}</span>
    )
  }

  return (
    <aside className="menu-list">
      <ul>
        <li>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
        </li>
      </ul>
    </aside>
  );
};

export default Notification;
