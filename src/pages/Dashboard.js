import { connect } from "react-redux";
import Header from "../components/Header";

import UpcomingRenewals from "../components/dashboard/UpcomingRenewals";
import StatBoxes from "../components/dashboard/StatBoxes";
import UpcomingEvents from "../components/events/UpcomingEvents";

const Dashboard = (props) => {

  let contracts = props.contractState;
  let events = props.eventState;

  return (
    <div>
      <Header title="Dashboard" />
      {/* <section className="section">
        <Route path="/dashboard/new-user">
          <p>Welcome, new user!</p>
        </Route>
      </section> */}
      <section className="section">
        <div className="container-fluid">
          <StatBoxes contracts={contracts} />
        </div>
        <div className="container-fluid">
          <div className="columns">
            <div className="column is-one-third">
              <UpcomingRenewals contracts={contracts} />
            </div>
            <div className="column is-one-third">
              <UpcomingEvents events={events} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contractState: state.contracts,
    eventState: state.events,
    dispatchData: state.dispatch,
  };
};

export default connect(mapStateToProps)(Dashboard);
