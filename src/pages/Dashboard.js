import { Route } from "react-router-dom";


const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <Route path="/dashboard/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  )
};

export default Dashboard;
