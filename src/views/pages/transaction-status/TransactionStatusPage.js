import React, { useEffect } from "react";
import PackageComponent from "src/components/package";

import PaymentComponent from "src/components/payment";
import { useSelector } from "react-redux";
import { isCreatePaymentSelector } from "src/redux/selectors";
import ProductComponent from "src/components/product";
import { isCartItemSelector } from "src/redux/selectors/product/product.selector";
import CartDetailComponent from "src/components/cart";
import Footer from "src/components/footer";
import "./style.css";
import {
  FaCheck,
  FaCheckCircle,
  FaCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import { ErrorToast } from "src/components/commons/Layouts/Alerts";
import { useLocation } from "react-router-dom";
const TransactionStatusPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const vnpTransactionStatus = searchParams.get("vnp_TransactionStatus");

  //   useEffect(() => {
  //     // Kiểm tra giá trị vnp_TransactionStatus
  //     if (vnpTransactionStatus === "00") {
  //       ErrorToast("aa", 3000);
  //     } else {
  //       ErrorToast("aa", 3000);
  //     }
  //   }, []);

  return (
    <>
      <div className="row " id="cart-sl">
        <div className="container-fluid">
          <div className="container mt-5 mb-5" id="cart">
            {vnpTransactionStatus == "00" && (
              <div className="payment-success">
                <div className="success-icon-body">
                  <FaCheckCircle className="success-icon" />
                </div>

                <h1>Thanh toán thành công!</h1>
                <p>Cảm ơn bạn đã hoàn thành thanh toán.</p>
                <p>
                  Bạn sẽ nhận được thông tin xác nhận thanh toán trong thư điện
                  tử.
                </p>
                <p>Xin vui lòng kiểm tra hộp thư đến của bạn.</p>
                <button
                  className="mt-4"
                  onClick={() => (window.location.href = "/")}
                >
                  Quay lại trang chủ
                </button>
              </div>
            )}
            {vnpTransactionStatus !== "00" && (
              <div className="payment-success">
                <div className="success-icon-body">
                  <FaRegTimesCircle className="success-error" />
                </div>

                <h1>Thanh toán thất bại!</h1>
                <p>Đã xảy ra lỗi xảy ra trong quá trình thanh toán.</p>
                <p>Vui lòng liên hệ lại với chúng tôi để kiểm tra</p>
                {/* <p>Xin vui lòng kiểm tra hộp thư đến của bạn.</p> */}
                <button
                  className=" mt-4"
                  onClick={() => (window.location.href = "/")}
                >
                  Quay lại trang chủ
                </button>
              </div>
            )}
          </div>

          <Footer />
          <div className="copyright-text text-center">
            <p>
              © 2023 - All rights reserved
              <a
                href="https://qi.com.vn/"
                target="_blank"
                style={{ paddingLeft: "2px" }}
              >
                QI
              </a>
            </p>
          </div>

          <div className="top-btn">
            <i className="bx bx-chevrons-up bx-fade-up"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default TransactionStatusPage;
