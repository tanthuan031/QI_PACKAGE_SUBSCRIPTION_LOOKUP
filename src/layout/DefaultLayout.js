import React from "react";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import {
  ErrorToast,
  SuccessToast,
} from "src/components/commons/Layouts/Alerts";

const DefaultLayout = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const vnpResponseCode = urlParams.get("vnp_ResponseCode");
    const hasVnPayParam = urlParams.has("vn-pay");

    if (hasVnPayParam && vnpResponseCode) {
      // console.log("vnp_ResponseCode:", vnpResponseCode);
      if (vnpResponseCode == "00") {
        SuccessToast("Thanh toán thành công", 3000);
      } else {
        ErrorToast(
          "Thanh toán thất bại. Vui lòng liên hệ với chúng tôi để kiểm tra",
          3000
        );
      }
    }
  }, []);
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
