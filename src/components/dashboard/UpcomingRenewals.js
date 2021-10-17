import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import RenewalItem from "./RenewalItem";
import NoContractsFound from "../contracts/NoContractsFound";

const UpcomingRenewals = (props) => {
  let contracts = props.contracts;

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

  // if (!contracts || contracts.length === 0) {
  //   return <NoContractsFound />;
  // }

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
        {!contracts || contracts.length === 0 ? (
          <NoContractsFound />
        ) : (
          <aside className="menu">
            <ul className="menu-list">
              {sortedDates.map((date, index) => {
                return (
                  <li key={index}>
                    <RenewalItem
                      index={index}
                      date={date.endDate}
                      id={date.id}
                    />
                  </li>
                );
              })}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
};

export default UpcomingRenewals;
