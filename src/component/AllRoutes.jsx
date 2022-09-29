import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, HowItWorks, UseCase } from "../pages";
import { Pricing } from "../pages/Pricing";
import { Support } from "../pages/Support";

export function AllRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/use-cases" element={<UseCase />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
    </Fragment>
  );
}
