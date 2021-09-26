import { Route } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <BreadcrumbsItem
        to={`/dashboard`}
        className="is-active"
      >{`Dashboard`}</BreadcrumbsItem>
      <Route path="/dashboard/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Dashboard;