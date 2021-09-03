import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Contracts from "./pages/Contracts";
import ContractSingle from "./pages/ContractSingle";
import NewContract from "./pages/NewContract";

import Layout from "./components/Layout";

import { CONTRACT_DATA } from "./data/data";

function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/contracts" exact>
          <Contracts />
        </Route>
        <Route path="/contracts/:contractId">
          <ContractSingle contracts={CONTRACT_DATA} />
        </Route>
        <Route path="/new-contract">
          <NewContract />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
