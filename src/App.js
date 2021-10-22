import { Fragment } from "react";
import {
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Contracts from "./pages/Contracts";
import ContractSingle from "./pages/ContractSingle";
import ContractForm from "./components/contracts/ContractForm";
import Events from "./pages/Events";
import EventSingle from "./pages/EventSingle";
import EventForm from "./components/events/EventForm";
import NotFound from "./components/contracts/NoContractsFound";

import Layout from "./components/Layout";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bulma/css/bulma.min.css";

import "./App.scss";

toast.configure();
function App() {
  return (
    <Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/dashboard" />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path={`/contracts`} component={ContractForm} exact>
              <Contracts />
            </Route>

            <Route path={`/contracts/:slug`} component={ContractForm}>
              <ContractSingle />
            </Route>

            <Route path={`/contracts`} component={ContractForm} exact>
              <Contracts />
            </Route>

            <Route path={`/events`} component={EventForm} exact>
              <Events />
            </Route>

            <Route path={`/events/:slug`} component={EventForm}>
              <EventSingle />
            </Route>

            <Route path={`/events`} component={EventForm} exact>
              <Events />
            </Route>

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Fragment>
  );
}

export default App;
