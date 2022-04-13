import React from "react";
import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/signup/Signup";

import { BASE_NAME } from "./config/index";

const Routes = () => {
  return (
    <Router basename={BASE_NAME}>
      <Routing>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routing>
    </Router>
  );
};

export default Routes;
