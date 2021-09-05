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
import NewContractForm from "./components/contracts/NewContractForm";

import Layout from "./components/Layout";

import { CONTRACT_DATA } from "./data/data";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/contracts" component={NewContractForm} exact>
            <Contracts />
          </Route>
          <Route path="/contracts/:contractId">
            <ContractSingle contracts={CONTRACT_DATA} />
          </Route>
          <Route path="/add" component={NewContractForm}>
            <NewContract />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
