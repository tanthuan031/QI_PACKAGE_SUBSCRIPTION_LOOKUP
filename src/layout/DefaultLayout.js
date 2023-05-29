import React from "react";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";
import { Container } from "react-bootstrap";

const DefaultLayout = () => {
  return (
    <div>
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        {/* <Container> */}
        <AppContent />
        {/* </Container> */}
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
