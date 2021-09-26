import { Route } from "react-router-dom";
import Header from "../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrinStars,
  faFrown,
  faGrin,
  faGrinBeamSweat,
} from "@fortawesome/free-regular-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import StatBox from "../components/dashboard/StatBox";

const Dashboard = () => {
  const colorSuccess = "#48c78e";
  const colorInfo = "#3e8ed0";
  const colorWarning = "#ffe08a";
  const colorDanger = "#dd3333";

  return (
    <div>
      <Header />
      <section>
        <Route path="/dashboard/new-user">
          <p>Welcome, new user!</p>
        </Route>
      </section>
      <section className="section">
        <div className="columns">
          <div className="column">
            <div className="block">
              <StatBox
                icon={faGrinStars}
                color={colorInfo}
                title="Total Contracts"
                figure="20"
              />
            </div>
          </div>
          <div className="column">
            <div className="block">
              <StatBox
                icon={faGrin}
                color={colorSuccess}
                title="Active Contracts"
                figure="10"
              />
            </div>
          </div>
          <div className="column">
            <div className="block">
              <StatBox
                icon={faGrinBeamSweat}
                color={colorWarning}
                title="Draft Contracts"
                figure="5"
              />
            </div>
          </div>
          <div className="column">
            <div className="block">
              <StatBox
                icon={faFrown}
                color={colorDanger}
                title="Expired Contracts"
                figure="5"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
