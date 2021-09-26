import React from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Contracts from "./pages/Contracts";
import ContractSingle from "./pages/ContractSingle";
import NewContract from "./pages/NewContract";
import ContractForm from "./components/contracts/ContractForm";
import NotFound from "./components/contracts/NoContractsFound";

import Layout from "./components/Layout";

import "bulma/css/bulma.min.css";
import "./App.scss";

function App() {

  return (
    <>
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

            <Route path={`/contracts/:id`} component={ContractForm}>
              <ContractSingle />
            </Route>

            <Route path="/add" component={ContractForm}>
              <NewContract />
            </Route>

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
