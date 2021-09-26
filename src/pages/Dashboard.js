import { connect } from "react-redux";
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

const Dashboard = (props) => {
  const colorSuccess = "#48c78e";
  const colorInfo = "#3e8ed0";
  const colorWarning = "#ffe08a";
  const colorDanger = "#dd3333";

  let contracts = props.contractState;
  let total = contracts.length;

  let active = contracts.filter(function (e) {
    return e.status === "Active";
  });
  let draft = contracts.filter(function (e) {
    return e.status === "Draft";
  });
  let expired = contracts.filter(function (e) {
    return e.status === "Expired";
  });

  const currentTimestamp = Date.now()

  const getActiveUpdate = new Date(
    Math.max(...active.map((e) => new Date(e.updatedAt)))
  );
  const getDraftUpdate = new Date(
    Math.max(...draft.map((e) => new Date(e.updatedAt)))
  );
  const getExpiredUpdate = new Date(
    Math.max(...expired.map((e) => new Date(e.updatedAt)))
  );

  const updatedAt = new Date(
    Math.max(...contracts.map((e) => new Date(e.updatedAt)))
  );

  const getLastUpdated = (lastUpdated) => {
    return ((Date.now() - lastUpdated) / 60000).toFixed(0);
  };

  const lastActiveUpdate = getLastUpdated(getActiveUpdate);
  const lastDraftUpdate = getLastUpdated(getDraftUpdate);
  const lastExpiredUpdate = getLastUpdated(getExpiredUpdate);

  

  

  let lastUpdated = getLastUpdated(updatedAt);

  console.log("Contracts on dashboard: ", lastUpdated);

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
                figure={total}
                lastUpdated={lastUpdated}
              />
            </div>
          </div>
          <div className="column">
            <div className="block">
              <StatBox
                icon={faGrin}
                color={colorSuccess}
                title="Active Contracts"
                figure={active.length}
                lastUpdated={lastActiveUpdate}
              />
            </div>
          </div>
          <div className="column">
            <div className="block">
              <StatBox
                icon={faGrinBeamSweat}
                color={colorWarning}
                title="Draft Contracts"
                figure={draft.length}
                lastUpdated={lastDraftUpdate}
              />
            </div>
          </div>
          <div className="column">
            <div className="block">
              <StatBox
                icon={faFrown}
                color={colorDanger}
                title="Expired Contracts"
                figure={expired.length}
                lastUpdated={lastExpiredUpdate}
              />
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
    dispatchData: state.dispatch,
  };
};

export default connect(mapStateToProps)(Dashboard);
