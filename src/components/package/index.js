import {
  CAvatar,
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormInput,
  CInputGroup,
} from "@coreui/react";
import Notiflix from "notiflix";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { feeLookup } from "src/api/ApiBill/billAPI";
import {
  setDataPayment,
  setIsCreatePayment,
} from "src/redux/reducer/payment/payment.reducer";
import ImageBackgroundSlider from "../../assets/img/no-bgr_logo.png";
import { BlockUIAPI, BlockUICLIENT } from "../commons/Layouts/Notiflix";
import Footer from "../footer";
import IMG404 from "../../assets/img/404error.png";
import "./style.css";
const PackageComponent = (props) => {
  const dispatch = useDispatch();
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState("code");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
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

  const [dataSearch, setDataSearch] = useState(undefined);
  const [dataLookupPackage, setDataLookupPackage] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    BlockUIAPI("#package_checkout");
    setLoading(true);
    e.preventDefault();
    const result = await feeLookup({
      type: selectedItem,
      keyword: dataSearch,
    });
    setLoading(false);
    if (result === 403) {
      setDataLookupPackage(null);
    } else if (result === 500) {
      setDataLookupPackage(null);
    } else {
      setTimeout(() => {
        Notiflix.Block.remove("#package_checkout");
      }, 1000);
      setDataLookupPackage({
        package: result.detail,
        customer: result.info,
      });
    }
    Notiflix.Block.remove("#package_checkout");
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
        // console.log(checkedItems.length + 1);
        // console.log(dataLookupPackage.package.length);
        if (checkedItems.length + 1 == dataLookupPackage.package.length) {
          setIsCheckedAll(true);
        } else {
          setIsCheckedAll(false);
        }
        return [...prevCheckedItems, item];
      } else {
        // console.log(checkedItems.length, dataLookupPackage.package.length);
        if (checkedItems.length + 1 !== dataLookupPackage.package.length) {
          setIsCheckedAll(false);
        }
        return prevCheckedItems.filter(
          (checkedItem) =>
            // console.log("os", checkedItem)
            checkedItem !== item
        );
      }
    });

    // Tính toán tổng số tiền
    const amount = isChecked ? item.amount : -item.amount;
    setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);
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
    return items.reduce((total, item) => total + item.amount, 0);
  };

  // Checkout

  const handleCheckout = () => {
    // console.log("Checkout", checkedItems);
    dispatch(setIsCreatePayment(true));
    dispatch(
      setDataPayment({
        packages: checkedItems,
        customers: dataLookupPackage.customer,
        totalPrice: totalAmount,
      })
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Tuỳ chọn cho hiệu ứng di chuyển mượt hơn
    });
  };

  return (
    <div className="container-fluid">
      <div className="banner-style-three">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-8 col-md-8 col-sm-8">
                  <div className="banner-text">
                    <h6>
                      Tra cứu thông tin
                      <span className="background_span">gói cước</span>
                      <br></br> Internet đang sử dụng
                    </h6>
                    <p>
                      Tra cứu gói cước đang sử dụng nhằm thay đổi gói cước,
                      <br></br> nâng cấp gói cước sao cho phù hợp với nhu cầu sử
                      dụng của khách hàng!
                    </p>

                    <CButton
                      color="primary"
                      style={{ width: "150px" }}
                      className="custom-btn"
                      href={"#contact"}
                    >
                      Liên hệ
                    </CButton>
                  </div>
                </div>
                <div
                  className="col-4 col-md-4 col-sm-4"
                  style={{ position: "relative" }}
                >
                  <img
                    src={ImageBackgroundSlider}
                    style={{ maxWidth: "100%" }}
                  />
                  <div className="cricle-background_banner" id="find-section">
                    {/* <CAvatar
                      src={
                        "https://coreui.io/react/docs/static/1-34eedf58c0876517e8587997f9625944.jpg"
                      }
                    />
                    <CAvatar
                      src={
                        "https://coreui.io/react/docs/static/2-0c06e43dc16bee6cdfed92f9be277b5d.jpg"
                      }
                    />
                    <CAvatar
                      src={
                        "https://coreui.io/react/docs/static/3-07e357f51e1b86d9e741409ac9e2eba5.jpg"
                      }
                    />

                    <h5 className="customer_star_banner pt-2">
                      <FaStar className="text-warning" /> 1200+ Khách hàng
                    </h5> */}
                  </div>
                </div>
              </div>
              {/* <div className="row justify-content-center">
                <div className="banner-card">
                  <div className="row">
                    <div className="col col-md-4  banner-card-item">
                      <h3>150+</h3>
                      <span>
                        Gói cước đa dạng phù hợp nhiều mô hình doanh nghiệp và
                        hộ gia đình
                      </span>
                    </div>
                    <span className="layout_cricle-1"></span>
                    <div className="col col-md-4  banner-card-item">
                      <h3>200+</h3>
                      <span>
                        Gói cước đa dạng phù hợp nhiều mô hình doanh nghiệp và
                        hộ gia đình
                      </span>
                    </div>
                    <span className="layout_cricle-2 "></span>
                    <div className="col col-md-4  banner-card-item">
                      <h3>100+</h3>
                      <span>
                        Gói cước đa dạng phù hợp nhiều mô hình doanh nghiệp và
                        hộ gia đình
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="find-section pb-100">
        <div className="container">
          <form className="find-form">
            <div className="row">
              <div className="col-lg-12" style={{ position: "relative" }}>
                <CInputGroup className="mb-3 input-search">
                  <CDropdown variant="input-group">
                    <CDropdownToggle
                      color="secondary"
                      variant="outline"
                      style={{ width: "15%" }}
                      className="dropdown-custom input-lookup"
                    >
                      {(selectedItem === "code" && "Mã định danh") ||
                        (selectedItem === "identity" && "CMND/CCCD") ||
                        (selectedItem === "phone" && "Số điện thoại") ||
                        "Mã định danh"}
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => handleItemClick("code")}>
                        Mã định danh
                      </CDropdownItem>
                      <CDropdownItem onClick={() => handleItemClick("phone")}>
                        Số điện thoại
                      </CDropdownItem>
                      <CDropdownItem
                        onClick={() => handleItemClick("identity")}
                      >
                        CCCD-CMND
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                  <CFormInput
                    aria-label="Text input with dropdown button"
                    placeholder="Nhập để tìm kiếm..."
                    className="input-lookup"
                    onChange={(event) => setDataSearch(event.target.value)}
                  />
                </CInputGroup>
                <button
                  className="btn btn-outline-secondary btn-search"
                  type="submit"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={handleSearch}
                >
                  Tra cứu
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <section className="job-style-two " id="package_checkout">
        {dataLookupPackage !== undefined && dataLookupPackage !== null && (
          <div
            className="container"
            style={{
              background: "#fff",
              borderRadius: "27px",
              padding: "38px",
            }}
          >
            <div className="row ">
              {/* <h5 className="text-center"></h5> */}
              <div className="col-lg-12">
                <div className="job-card-two package-item-customer">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className=" job-info">
                        <ul>
                          <li style={{ fontWeight: 700 }}>
                            Thông tin khách hàng
                          </li>
                          <li style={{ fontWeight: 500 }}>
                            {dataLookupPackage.customer.cust_name}
                          </li>
                        </ul>
                        <div className="d-flex justify-content-between">
                          {dataLookupPackage.customer.cust_phone !==
                            undefined && (
                            <ul>
                              <li style={{ fontWeight: 700 }}>
                                <i className="bx bx-phone-call"></i>
                              </li>
                              <li style={{ fontWeight: 500 }}>
                                Số điện thoại:{" "}
                                {dataLookupPackage.customer.cust_phone}
                              </li>
                            </ul>
                          )}
                          {dataLookupPackage.customer.cust_identity !==
                            undefined && (
                            <ul>
                              <li style={{ fontWeight: 700 }}>
                                <i className="bx bx-id-card"></i>
                              </li>
                              <li style={{ fontWeight: 500 }}>
                                CMND/CCCD:
                                {dataLookupPackage.customer.cust_identity}
                              </li>
                            </ul>
                          )}
                          {dataLookupPackage.customer.cust_code !==
                            undefined && (
                            <ul>
                              <li style={{ fontWeight: 700 }}>
                                <i className="bx bx-user"></i>
                              </li>
                              <li style={{ fontWeight: 500 }}>
                                Mã định danh:{" "}
                                {dataLookupPackage.customer.cust_code}
                              </li>
                            </ul>
                          )}

                          {/* <ul>
                            <li style={{ fontWeight: 700 }}>
                              <i className="bx bx-buildings"></i>
                            </li>
                            <li style={{ fontWeight: 500 }}>
                              {dataLookupPackage.customer[0].customer_address}{" "}
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-center">Danh sách gói cước</h5>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-check d-flex justify-content-end mb-2">
                  <input
                    className="form-check-input"
                    style={{ marginRight: "2px" }}
                    type="checkbox"
                    value=""
                    name=""
                    id="flexCheckDefaultSelectAll"
                    checked={isCheckedAll}
                    onChange={handleCheckAll}
                  />
                  <label
                    className="form-check-label "
                    htmlFor="flexCheckDefaultSelectAll"
                    style={{ fontWeight: "500" }}
                  >
                    Chọn tất cả
                  </label>
                </div>
              </div>
              <div style={{ maxHeight: "950px", overflowY: "scroll" }}>
                {dataLookupPackage.package.map((item, index) => {
                  return (
                    <div className="col-lg-12" key={index}>
                      <div className="job-card-two package-item">
                        <div className="row align-items-center">
                          {/* <div className="col-md-1">
                          <div className="company-logo">
                            <a href="job-details.html">
                              <img src={ImageBackgroundCompany} alt="logo" />
                            </a>
                          </div>
                        </div> */}
                          <div className="col-md-11">
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
                                  <h5>
                                    #{item.pay_category} - {item.description_vn}
                                  </h5>
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
                              {/* {dataLookupPackage.customer[0].status === 0 ? ( */}
                              <span className="btn btn-outline-warning btn-cus">
                                Chưa thanh toán
                              </span>
                              {/* ) : ( */}
                              {/* <span className="btn btn-outline-warning">
                                Quá hạn thanh toán
                              </span>
                            )} */}
                            </div>
                          </div>
                          <div className="col-md-1">
                            <div className="form-check text-center">
                              <input
                                className="form-check-input item-checkbox-payment"
                                style={{ margin: "0 50%" }}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                checked={checkedItems.includes(item)}
                                onChange={(event) =>
                                  handleCheckItem(event, item, index)
                                }
                              />
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
            <div className="col-lg-12 mr-3">
              <div className="form-check text-end">
                <h6>Tổng cộng</h6>
                <h4>{VND.format(totalAmount)}</h4>
              </div>
            </div>
            <div className="col-lg-12 mr-3 mt-3">
              <div className="form-check d-flex justify-content-end">
                {/* <button className="btn btn-secondary mr-3 ">Hủy</button> */}
                <button
                  className={`btn ${
                    checkedItems.length > 0 ? "btn-primary" : "btn-secondary"
                  } `}
                  onClick={handleCheckout}
                  disabled={checkedItems.length > 0 ? false : true}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        )}
        {dataLookupPackage === null && (
          <div className="container">
            {/* <h1 className="error text-center">404</h1> */}

            <>
              <img
                src={loading === false ? IMG404 : undefined}
                style={{ height: "10vh", margin: "0 auto" }}
                className="d-flex justify-content-center "
              ></img>

              <h5 className="text-center text-primary ">
                {loading === false && (
                  <>
                    Thông tin không tồn tại <br /> Hoặc chưa có ghi nhận kỳ cước
                    trong thời điểm hiện tại
                  </>
                )}
              </h5>
            </>
          </div>
        )}
      </section>

      <section className="main-info  pb-70" id="contact">
        <div className="container" id="info">
          <div className="row">
            <div className="col-md-6">
              <i
                className=""
                style={{
                  fontSize: "2.3rem",
                  color: " rgb(12, 115, 231)",
                  borderRadius: "5px",
                  padding: "3px",
                  textAlign: "center",
                  margin: "0 34%",
                }}
              ></i>
              <h3 className="main-info-title">Chúng tôi cung cấp đến bạn</h3>
              <p className="main-info-content">
                Các giải pháp thiết yếu cho doanh nghiệp trong thời đại 4.0, tối
                ưu trải nghiệm cho khách hàng, mang lại giá trị thiết thực và
                hiệu quả cho doanh nghiệp
              </p>
              <div>
                <div className="input-group mb-3 main-info-support">
                  <div
                    className="col-lg-12"
                    style={{ position: "relative", width: "90%" }}
                  >
                    <CInputGroup className="mb-3 input-search">
                      <CFormInput placeholder="Email của bạn" />
                    </CInputGroup>
                    <button
                      className="btn btn-outline-secondary btn-info-support"
                      type="submit"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Liên hệ
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="col-md-12"
                style={{ height: "220px", textAlign: "center" }}
              >
                <i
                  className="bx bxl-redux"
                  style={{
                    fontSize: "2.3rem",
                    color: "rgb(7, 231, 26)",
                    borderRadius: "5px",
                    padding: "3px",
                    textAlign: "center",
                    margin: "0 34%",
                  }}
                ></i>
                <h6 style={{ fontWeight: 700 }}>Phát triển giải pháp</h6>
                <p>
                  Cung cấp các giải pháp công nghệ tích hợp trí tuệ nhân
                  tạo(AI), tối ưu hóa quy trình quản lý doanh nghiệp{" "}
                </p>
              </div>
              <div
                className="col-md-12 "
                style={{ height: "220px", textAlign: "center" }}
              >
                <i
                  className="bx bxl-google"
                  style={{
                    fontSize: "2.3rem",
                    color: " rgb(12, 115, 231)",
                    borderRadius: "5px",
                    padding: "3px",
                    textAlign: "center",
                    margin: "0 34%",
                  }}
                ></i>
                <h6 style={{ fontWeight: 700 }}>Dịch vụ Internet</h6>
                <p>
                  Cung cấp các giải pháp kết nối Internet cho các đơn vị, tổ
                  chức, doanh nghiệp trên toàn quốc
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="col-md-12"
                style={{ height: "220px", textAlign: "center" }}
              >
                <i
                  className="bx bx-laptop"
                  style={{
                    fontSize: "2.3rem",
                    color: "rgb(219, 223, 9)",
                    borderRadius: "5px",
                    padding: "3px",
                    textAlign: "center",
                    margin: "0 34%",
                  }}
                ></i>
                <h6 style={{ fontWeight: 700 }}>Công nghệ thông tin</h6>
                <p>
                  Tư vấn thiết kế hệ thống công nghệ thông tin mới. Nâng cấp và
                  tối ưu hệ thống sẵn có cho tổ chức và doanh nghiệp{" "}
                </p>
              </div>
              <div
                className="col-md-12"
                style={{ height: "220px", textAlign: "center" }}
              >
                <i
                  className="bx bx-sun"
                  style={{
                    fontSize: "2.3rem",
                    color: "rgb(204, 27, 95)",
                    borderRadius: "5px",
                    padding: "3px",
                    textAlign: "center",
                    margin: "0 34%",
                  }}
                ></i>
                <h6 style={{ fontWeight: 700 }}>Năng lượng mặt trời</h6>
                <p>
                  Tư vấn, thiết kế và triển khai các giải pháp năng lượng mặt
                  trời nối lưới(ESCO và EPC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  );
};
export default PackageComponent;
