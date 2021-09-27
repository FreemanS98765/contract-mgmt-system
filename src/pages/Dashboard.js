import { Route } from "react-router-dom";
import Header from "../components/Header";

import UpcomingRenewals from "../components/dashboard/UpcomingRenewals";
import StatBoxes from "../components/dashboard/StatBoxes";

const Dashboard = () => {
  return (
    <div>
      <Header title="Dashboard" />
      {/* <section className="section">
        <Route path="/dashboard/new-user">
          <p>Welcome, new user!</p>
        </Route>
      </section> */}
      <StatBoxes />
      <section className="section">
        <div className="columns">
          <div className="column is-one-third">
            <UpcomingRenewals />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
