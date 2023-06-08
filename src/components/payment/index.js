import React, { useState } from "react";
import "./style.css";
import {
  CAvatar,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormInput,
  CInputGroup,
} from "@coreui/react";
import ImageBackgroundSlider from "../../assets/img/no-bgr_logo.png";
import ImageBackgroundCustomer from "../../assets/img/tag.png";
import ImageBackgroundCompany from "../../assets/img/company-logo/5.png";
import ImageBackgroundLogo from "../../assets/img/logo_qi.png";
import { FaFacebook, FaFacebookSquare, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { dataPackagePaymentSelector } from "src/redux/selectors";
import { Alert, Button, Form, Modal } from "react-bootstrap";

import iconVNPAY from "../../utils/logo-vnpay.png";
import iconMOMO from "../../utils/logo-momo.png";
import iconVISA from "../../utils/logo-visa.png";
import { setIsCreatePayment } from "src/redux/reducer/payment/payment.reducer";

const PaymentComponent = (props) => {
  const dispatch = useDispatch();
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (event) => {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][id^="flexCheckDefault"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked;
    });
    setSelectAll(event.target.checked);
  };

  const listData =
    localStorage.getItem("myData") &&
    JSON.parse(localStorage.getItem("myData"));
  const listPackage =
    localStorage.getItem("myPackage") &&
    JSON.parse(localStorage.getItem("myPackage"));

  const [dataSearch, setDataSearch] = useState();
  const [dataLookupPackage, setDataLookupPackage] = useState(undefined);

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredData = listData.filter((item) => {
      return (
        item.customer_identifier_code === dataSearch ||
        item.customer_phone === dataSearch ||
        item.customer_code === dataSearch
      );
    });

    if (filteredData.length > 0) {
      const customerPackages = listPackage.filter((itm) => {
        return filteredData[0].package_code.includes(itm.package_code);
      });
      setDataLookupPackage({
        package: customerPackages,
        customer: filteredData,
      });
    } else {
      setDataLookupPackage(undefined);
    }
  };

  // Check

  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const handleCheckItem = (event, item) => {
    const isChecked = event.target.checked;

    // Cập nhật trạng thái checkbox của item được chọn/bỏ chọn
    setCheckedItems((prevCheckedItems) => {
      if (isChecked) {
        console.log(checkedItems.length + 1);
        console.log(dataLookupPackage.package.length);
        if (checkedItems.length + 1 == dataLookupPackage.package.length) {
          setIsCheckedAll(true);
        } else {
          setIsCheckedAll(false);
        }
        return [...prevCheckedItems, item];
      } else {
        console.log(checkedItems.length, dataLookupPackage.package.length);
        if (checkedItems.length + 1 !== dataLookupPackage.package.length) {
          setIsCheckedAll(false);
        }
        return prevCheckedItems.filter(
          (checkedItem) => checkedItem.id !== item.id
        );
      }
    });

    // Tính toán tổng số tiền
    const amount = isChecked ? item.package_price : -item.package_price;
    setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);

    // Kiểm tra xem có mục nào chưa được chọn
    // setIsIndeterminate(
    //   checkedItems.length > 0 &&
    //     checkedItems.length + 1 < dataLookupPackage.package.length
    // );
  };

  const handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    setIsCheckedAll(isChecked);

    // Cập nhật trạng thái checkbox của tất cả các item
    if (isChecked) {
      setCheckedItems(dataLookupPackage.package);
    } else {
      setCheckedItems([]);
    }

    // Tính toán tổng số tiền
    const totalAmount = isChecked
      ? calculateTotalAmount(dataLookupPackage.package)
      : 0;
    setTotalAmount(totalAmount);

    // Cập nhật trạng thái của checkbox "Chọn tất cả"
    setIsIndeterminate(false);
  };
  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.package_price, 0);
  };

  const dataCheckout = useSelector(dataPackagePaymentSelector);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-5">Thông tin thanh toán</h3>
        <div className="container">
          <div className="row">
            <div
              className=" col-md-7"
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "30px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div>
                <h5 className="text-center mb-5 ">Thông tin khách hàng</h5>
                <div className=" col-md-12 col-sm-12 mt-2">
                  <span className="" style={{ fontWeight: "500" }}>
                    <i className="bx bx-user"></i>
                    Tên khách hàng :
                  </span>
                  <span> {dataCheckout.customers[0].customer_name}</span>
                </div>
                <div className=" col-md-12 col-sm-12 mt-2">
                  <span style={{ fontWeight: "500" }}>
                    <i className="bx bx-phone"></i>
                    Số điện thoại :
                  </span>
                  <span> {dataCheckout.customers[0].customer_phone}</span>
                </div>
              </div>

              <h5 className="text-center mb-4 mt-4"> Danh sách gói cước</h5>

              {dataCheckout !== undefined &&
                dataCheckout.packages.map((item, index) => {
                  return (
                    <div className="col-lg-12 ">
                      <div className="job-card-two">
                        <div className="row align-items-center">
                          <div className="col-md-12">
                            <div className="job-info">
                              <div className="form-check">
                                <input
                                  className="form-check-input "
                                  type="radio"
                                  name={`flexRadioDefault${index}`}
                                  id={`flexRadioDefault${index}`}
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label "
                                  htmlFor={`flexRadioDefault${index}`}
                                >
                                  <div
                                    style={{
                                      fontSize: "1.1rem",
                                      fontWeight: 500,
                                    }}
                                  >
                                    #{item.package_code} - {item.package_name}
                                  </div>
                                </label>
                              </div>
                              <ul>
                                <li style={{ fontWeight: 700 }}>Kỳ cước :</li>
                                <li style={{ fontWeight: 500 }}>
                                  Tháng {index + 1}
                                </li>
                              </ul>
                              <span
                                className="btn btn-outline-warning"
                                style={{ marginBottom: "30px" }}
                              >
                                Chưa thanh toán
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="d-flex justify-content-end"
                            style={{ position: "relative" }}
                          >
                            <div className="d-flex job-card-two-currency">
                              <h6>Số tiền :</h6>
                              <h6>{VND.format(item.package_price)}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-md-1"></div>
            <div className=" col-md-4 mt-5 mb-5">
              <div
                className=""
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                {" "}
                <h4 className="text-center">Tóm tắt đơn hàng</h4>
                <hr></hr>
                <div className=" mt-4">
                  <h6 className="d-flex">
                    <div style={{ width: "50%" }}> Giá tiền :</div>
                    <div> {VND.format(dataCheckout.totalPrice)}</div>
                  </h6>
                </div>
                <div className="">
                  <h6 className="d-flex">
                    <div style={{ width: "50%" }}> VAT :</div>
                    <div>
                      10% ( {VND.format((dataCheckout.totalPrice * 10) / 100)} )
                    </div>
                  </h6>
                </div>
                <div className="mt-5">
                  <div className="text-summary">
                    <h6 className="info-invoice-left">
                      Phương thức thanh toán
                    </h6>
                    <div className=" justify-content-between">
                      <Form.Check
                        className="info-invoice-left"
                        type="radio"
                        label={
                          <img
                            className="iconIamgeVNPAGE"
                            src={iconVNPAY}
                            width={"50px"}
                          />
                        }
                        name="payment"
                        id="vnpay"
                        value="VNPay"
                        checked
                      />
                      <Form.Check
                        type="radio"
                        label={
                          <img
                            className="iconIamgeMOMO"
                            src={iconMOMO}
                            width={"50px"}
                          />
                        }
                        name="payment"
                        id="momo"
                        value="Momo"
                      />

                      <Form.Check
                        type="radio"
                        label={
                          <img
                            className="iconIamgeVISA"
                            src={iconVISA}
                            width={"50px"}
                          />
                        }
                        name="payment"
                        id="visa"
                        value="vnpay"
                      />
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="">
                  <h5 className="d-flex">
                    <div style={{ width: "50%" }}>Tổng tiền :</div>
                    <div className="text-danger text-center">
                      {VND.format(
                        dataCheckout.totalPrice -
                          (dataCheckout.totalPrice * 10) / 100
                      )}
                      <p
                        className="text-dark "
                        style={{ fontWeight: "400", fontSize: ".8rem" }}
                      >
                        {" "}
                        (Đã bao gồm VAT)
                      </p>
                    </div>
                  </h5>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-secondary mt-3 "
                    style={{ marginRight: "10px" }}
                    onClick={() => dispatch(setIsCreatePayment(false))}
                  >
                    Hủy
                  </button>
                  <button
                    className="btn btn-primary mt-3 "
                    onClick={handleShow}
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hệ thống đang trong quá trình thử nghiệm</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
      <footer className="footer-area pt-100 pb-70 mt-5" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src={ImageBackgroundLogo}
                      alt="logo"
                      width="80px"
                      height="80px"
                    />
                  </a>
                </div>
                <p>
                  Là công ty hàng đầu trong lĩnh vực công nghệ, ứng dụng vào
                  công việc và cuộc sống, góp phần đổi mới sáng tạo, chuyển đổi
                  số, ứng dụng công nghệ 4.0 và AI vào việc giám sát, quản lý và
                  điều hành doanh nghiệp.
                </p>
                <div className="footer-social">
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="bx bxl-pinterest-alt"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget pl-60">
                <h3>Tài liệu kham khảo</h3>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Điều khoản chung
                    </a>
                  </li>
                  <li>
                    <a href="about.html">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Hợp đồng cung cấp dịch vụ
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Bảng cước dịch vụ QiNET
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget pl-60">
                <h3>Công Ty</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a href="account.html">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Tuyển dụng
                    </a>
                  </li>
                  <li>
                    <a href="catagories.html">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Liên hệ
                    </a>
                  </li>
                  <li>
                    <a href="resume.html">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Resume
                    </a>
                  </li>
                  <li>
                    <a href="job-list.html">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Khách hàng - Đối tác
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget footer-info">
                <h3>Thông Tin Liên Hệ</h3>
                <ul>
                  <li>
                    <span>
                      <i className="bx bxs-phone"></i>
                      Số điện thoại:
                    </span>
                    <a href="tel:1900633827"> 1900633827 - (028) 35149999 </a>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-world"></i>
                      Website:
                    </span>
                    <a href="https://qi.com.vn"> qi.com.vn </a>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-envelope"></i>
                      Email:
                    </span>
                    <a href="#"> info@qi.com.vn </a>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-location-plus"></i>
                      Địa chỉ:
                    </span>
                    Qi Technologies Corporation, Lô U14b - 16a, Đường số 22, KCX
                    Tân Thuận, P. Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
    </>
  );
};
export default PaymentComponent;
