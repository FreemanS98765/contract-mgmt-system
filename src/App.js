import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Contracts from "./pages/Contracts";
import ContractSingle from "./pages/ContractSingle";
import NewContract from "./pages/NewContract";

import MainNavigation from "./components/MainNavigation";
import Layout from "./components/Layout";

import "./App.css";

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
          <ContractSingle />
        </Route>
        <Route path="/new-contract">
          <NewContract />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
