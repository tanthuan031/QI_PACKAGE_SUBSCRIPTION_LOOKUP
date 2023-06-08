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
import { Form } from "react-bootstrap";

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

  console.log("dataCheckout", dataCheckout);
  return (
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
                <span>{dataCheckout.customers[0].customer_name}</span>
              </div>
              <div className=" col-md-12 col-sm-12 mt-2">
                <span style={{ fontWeight: "500" }}>
                  <i className="bx bx-phone"></i>
                  Số điện thoại :
                </span>
                <span>{dataCheckout.customers[0].customer_phone}</span>
              </div>
            </div>

            <h5 className="text-center mb-5 mt-4"> Danh sách gói cước</h5>

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
                                <div style={{ fontSize: "1.1rem" }}>
                                  #{item.package_code} - {item.package_name}
                                </div>
                              </label>
                            </div>

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
                  <h6 className="info-invoice-left">Phương thức thanh toán</h6>
                  <div className=" justify-content-between">
                    <Form.Check
                      className="info-invoice-left"
                      type="radio"
                      label={
                        <img
                          className="iconIamge"
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
                          className="iconIamge"
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
                          className="iconIamge"
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
                <button className="btn btn-primary mt-3 ">Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentComponent;
