import MainNavigation from "./MainNavigation";

const TopBar = (props) => {
  return (
    <section className="topBar">
      <div className="logo">DanFree Design</div>
      <MainNavigation
        onShowNotification={props.onShowNotification}
        onHideNotification={props.onHideNotification}
        onShowToast={props.onShowToast}
        notifications={props.notifications}
      />
    </section>
  );
};

export default TopBar;
