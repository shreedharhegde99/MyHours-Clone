import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

export function AllRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/how-it-works" />
        <Route path="/use-cases" />
        <Route path="pricing" />
        <Route path="/support" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
    </Fragment>
  );
}
