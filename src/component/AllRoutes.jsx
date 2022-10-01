import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  HowItWorks,
  MobileApp,
  Signin,
  UseCase,
  Pricing,
  Support,
  Signup,
  Aboutus,
  Features,
} from "../pages";

export function AllRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/use-cases" element={<UseCase />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mobileapp" element={<MobileApp />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Fragment>
  );
}
