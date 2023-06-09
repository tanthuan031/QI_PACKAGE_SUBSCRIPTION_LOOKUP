import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { dataPackagePaymentSelector } from "src/redux/selectors";
import "./style.css";

import { setIsCreatePayment } from "src/redux/reducer/payment/payment.reducer";
import iconVNPAY from "../../utils/logo-vnpay.png";
import Footer from "../footer";
import { vnpayPaymentPackage } from "src/api/ApiBill/billAPI";
import { ErrorToast } from "../commons/Layouts/Alerts";
import { BlockUIAPI } from "../commons/Layouts/Notiflix";

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
  console.log("dataCheckout", dataCheckout);
  const handleClose = () => setShow(false);
  const handlePayment = async () => {
    //  BlockUICLIENT("#rô");
    const data = {
      bill_id: dataCheckout.customers.id,
      order_info: "Thanh toán cước",
      total: dataCheckout.totalPrice,
      details: dataCheckout.packages,
    };
    const result = await vnpayPaymentPackage(data);
    if (result === 500) {
      ErrorToast("Có lỗi xảy ra. Vui lòng thử lại ", 3000);
    } else {
      window.location.href = result;
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <h3 className="text-center mb-5">Thông tin thanh toán</h3>
        <div className="container">
          <div className="row">
            <div
              className=" col-md-7"
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "30px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.22) !important",
              }}
            >
              <div>
                <h5 className="text-center mb-5 ">Thông tin khách hàng</h5>
                <hr></hr>
                <div className=" col-md-12 col-sm-12 mt-2">
                  <span className="" style={{ fontWeight: "500" }}>
                    <i className="bx bx-user"></i>
                    Tên khách hàng :
                  </span>
                  <span> {dataCheckout.customers.cust_name}</span>
                </div>
                {dataCheckout.customers.cust_phone !== undefined && (
                  <div className=" col-md-12 col-sm-12 mt-2">
                    <span style={{ fontWeight: "500" }}>
                      <i className="bx bx-phone"></i>
                      Số điện thoại :
                    </span>
                    <span> {dataCheckout.customers.cust_phone}</span>
                  </div>
                )}
                {dataCheckout.customers.cust_code !== undefined && (
                  <div className=" col-md-12 col-sm-12 mt-2">
                    <span style={{ fontWeight: "500" }}>
                      <i className="bx bx-phone"></i>
                      Mã định danh :
                    </span>
                    <span> {dataCheckout.customers.cust_code}</span>
                  </div>
                )}
                {dataCheckout.customers.cust_identity !== undefined && (
                  <div className=" col-md-12 col-sm-12 mt-2">
                    <span style={{ fontWeight: "500" }}>
                      <i className="bx bx-phone"></i>
                      CMND/CCCD :
                    </span>
                    <span> {dataCheckout.customers.cust_identity}</span>
                  </div>
                )}

                {/* <div className=" col-md-12 col-sm-12 mt-2">
                  <span style={{ fontWeight: "500" }}>
                    <i className="bx bx-phone"></i>
                    Địa chỉ :
                  </span>
                  <span> {dataCheckout.customers[0].customer_address}</span>
                </div> */}
              </div>
              <hr></hr>
              <h5 className="text-center mb-4 mt-4"> Danh sách gói cước</h5>
              <div
                style={{
                  maxHeight: "500px",
                  overflowY: "auto",
                }}
              >
                {dataCheckout !== undefined &&
                  dataCheckout.packages.map((item, index) => {
                    return (
                      <div className="col-lg-12" key={index}>
                        <div className="job-card-two package-item">
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
                                      #{item.pay_category} -
                                      {item.description_vn}
                                    </div>
                                  </label>
                                </div>
                                <ul>
                                  <li style={{ fontWeight: 700 }}>Kỳ cước :</li>
                                  <li style={{ fontWeight: 500 }}>
                                    Tháng
                                    {" " +
                                      item.bill_period.slice(4) +
                                      "-" +
                                      item.bill_period.slice(0, 4)}
                                  </li>
                                </ul>
                                <span
                                  className="btn btn-outline-warning btn-cus"
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
                                <h6>{VND.format(item.amount)}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className=" col-md-4  mb-5">
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
                    <div style={{ width: "40%" }}> Giá tiền :</div>
                    <div> {VND.format(dataCheckout.totalPrice)}</div>
                  </h6>
                </div>
                <div className="mt-3">
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
                      {/* <Form.Check
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
                      /> */}
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="">
                  <h5 className="d-flex">
                    <div style={{ width: "50%" }}>Tổng tiền :</div>
                    <div className="text-danger text-center">
                      {VND.format(dataCheckout.totalPrice)}
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
                    onClick={handlePayment}
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
    </>
  );
};
export default PaymentComponent;
