import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import RenewalItem from "./RenewalItem";

const UpcomingRenewals = (props) => {
  let contracts = props.contractState;

  let renewalDates = [];

  const sortByDate = (arr) => {
    const sorter = (a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    };
    arr.sort(sorter);
  };

  let sortedDates = contracts.filter(function (e) {
    return e.endDate;
  });

  sortedDates = sortedDates.sort((a, b) => b - a);

  //   sortedDates.map((date) => {
  //     return renewalDates.push(date.endDate);
  //   });

  return (
    <div className="card upcoming-renewals">
      <div className="card-header">
        <h5>Upcoming Renewals</h5>
        <span className="icon-text is-align-items-center">
          <span className="icon">
            <FontAwesomeIcon size="lg" icon={faBell} />
          </span>
        </span>
      </div>
      <div className="card-content">
        <aside className="menu">
          <ul className="menu-list">
            {sortedDates.map((date) => {
              return <RenewalItem date={date.endDate} id={date.id} />;
            })}
          </ul>
        </aside>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contractState: state.contracts,
    dispatchData: state.dispatch,
  };
};

export default connect(mapStateToProps)(UpcomingRenewals);
