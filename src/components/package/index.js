import React, { useState } from "react";
import "./style.css";
import {
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
import ImageBackgroundCompany from "../../assets/img/company-logo/1.png";
import ImageBackgroundLogo from "../../assets/img/logo_qi.png";
import { FaFacebook, FaFacebookSquare } from "react-icons/fa";
const PackageComponent = (props) => {
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
  return (
    <div className="container-fluid">
      <div className="banner-style-three">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container" style={{ marginTop: "-10%" }}>
              <div className="row">
                <div className="col col-md-8 col-sm-12">
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
                  className="col col-md-4 col-sm-12"
                  style={{ position: "relative" }}
                >
                  <img
                    src={ImageBackgroundSlider}
                    style={{ maxWidth: "100%" }}
                  />
                  <div className="cricle-background" id="find-section">
                    <img
                      src={ImageBackgroundCustomer}
                      style={{ maxWidth: "100%" }}
                    />
                    <h4 className="customer_background">1200+ Khách hàng</h4>
                    <h6 className="customer_star">1200+ Khách hàng</h6>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center" id="tra-cuu">
                <div className="banner-card">
                  <div className="row">
                    <div className="col col-md-4 col-sm-12 banner-card-item">
                      <h3>150+</h3>
                      <span>
                        Gói cước đa dạng phù hợp nhiều mô hình doanh nghiệp và
                        hộ gia đình
                      </span>
                    </div>
                    <span className="layout_cricle-1 col-sm-1"></span>
                    <div className="col col-md-4 col-sm-10 banner-card-item">
                      <h3>200+</h3>
                      <span>
                        Gói cước đa dạng phù hợp nhiều mô hình doanh nghiệp và
                        hộ gia đình
                      </span>
                    </div>
                    <span className="layout_cricle-2 col-sm-1"></span>
                    <div className="col col-md-4 col-sm-10 banner-card-item">
                      <h3>100+</h3>
                      <span>
                        Gói cước đa dạng phù hợp nhiều mô hình doanh nghiệp và
                        hộ gia đình
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
                      className="dropdown-custom"
                    >
                      Địa điểm
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Hồ Chí Minh</CDropdownItem>
                      <CDropdownItem href="#">Đà Nẵng</CDropdownItem>
                      <CDropdownItem href="#">Hà Nội</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                  <CFormInput aria-label="Text input with dropdown button" />
                </CInputGroup>
                <button
                  className="btn btn-outline-secondary btn-search"
                  type="submit"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tra cứu
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <section className="job-style-two pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-check d-flex justify-content-end">
                <input
                  className="form-check-input"
                  style={{ marginRight: "2px" }}
                  type="checkbox"
                  value=""
                  name=""
                  id="flexCheckDefaultSelectAll"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <label
                  className="form-check-label "
                  htmlFor="flexCheckDefaultSelectAll"
                >
                  Chọn tất cả
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="job-card-two">
                <div className="row align-items-center">
                  <div className="col-md-1">
                    <div className="company-logo">
                      <a href="job-details.html">
                        <img src={ImageBackgroundCompany} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="job-info">
                      <div className="form-check">
                        <input
                          className="form-check-input "
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label "
                          htmlFor="flexRadioDefault1"
                        >
                          <h5>#76666 - [PEG] - Lắp mới wifi tòa nhà</h5>
                        </label>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-user"></i>
                          Tên khách hàng :
                        </li>
                        <li>Bùi Văn Giang</li>
                      </ul>
                      <span className="btn btn-outline-success">
                        Đã thanh toán
                      </span>
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
                      <h6>275.000đ</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="job-card-two">
                <div className="row align-items-center">
                  <div className="col-md-1">
                    <div className="company-logo">
                      <a href="job-details.html">
                        <img src={ImageBackgroundCompany} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="job-info">
                      <div className="form-check">
                        <input
                          className="form-check-input "
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault12"
                          defaultChecked
                        />
                        <label
                          className="form-check-label "
                          htmlFor="flexRadioDefault1"
                        >
                          <h5>#76666 - [PEG] - Lắp mới wifi tòa nhà</h5>
                        </label>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-user"></i>
                          Tên khách hàng :
                        </li>
                        <li>Bùi Văn Giang</li>
                      </ul>
                      <span className="btn btn-outline-warning">
                        Đến kỳ thanh toán
                      </span>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="form-check text-center">
                      <input
                        className="form-check-input item-checkbox-payment "
                        style={{ margin: "0 50%" }}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
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
                      <h6>275.000đ</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-12">
              <div className="job-card-two">
                <div className="row align-items-center">
                  <div className="col-md-1">
                    <div className="company-logo">
                      <a href="job-details.html">
                        <img src={ImageBackgroundCompany} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="job-info">
                      <div className="form-check">
                        <input
                          className="form-check-input "
                          type="radio"
                          name="flexRadioDefault3"
                          id="flexRadioDefault3"
                          defaultChecked
                        />
                        <label
                          className="form-check-label "
                          htmlFor="flexRadioDefault1"
                        >
                          <h5>#76666 - [PEG] - Lắp mới wifi tòa nhà</h5>
                        </label>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-user"></i>
                          Tên khách hàng :
                        </li>
                        <li>Bùi Văn Giang</li>
                      </ul>
                      <span className="btn btn-outline-danger">
                        Quá hạn thanh toán
                      </span>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="form-check text-center">
                      <input
                        className="form-check-input item-checkbox-payment "
                        style={{ margin: "0 50%" }}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
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
                      <h6>275.000đ</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mr-3">
            <div className="form-check text-end">
              <h6>Tổng cộng</h6>
              <h4>825.000đ</h4>
            </div>
          </div>
          <div className="col-lg-12 mr-3 mt-3">
            <div className="form-check d-flex justify-content-end">
              <button className="btn btn-secondary mr-3 ">Hủy</button>
              <button className="btn btn-primary">Thanh toán</button>
            </div>
          </div>
        </div>
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
              <div className="col-md-12" style={{ height: "220px" }}>
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
                <h6>Phát triển giải pháp</h6>
                <p>
                  Cung cấp các giải pháp công nghệ tích hợp trí tuệ nhân
                  tạo(AI), tối ưu hóa quy trình quản lý doanh nghiệp{" "}
                </p>
              </div>
              <div className="col-md-12 " style={{ height: "220px" }}>
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
                <h6>Dịch vụ Internet</h6>
                <p>
                  Cung cấp các giải pháp kết nối Internet cho các đơn vị, tổ
                  chức, doanh nghiệp trên toàn quốc
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="col-md-12" style={{ height: "220px" }}>
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
                <h6>Công nghệ thông tin</h6>
                <p>
                  Tư vấn thiết kế hệ thống công nghệ thông tin mới. Nâng cấp và
                  tối ưu hệ thống sẵn có cho tổ chức và doanh nghiệp{" "}
                </p>
              </div>
              <div className="col-md-12" style={{ height: "220px" }}>
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
                <h6>Năng lượng mặt trời</h6>
                <p>
                  Tư vấn, thiết kế và triển khai các giải pháp năng lượng mặt
                  trời nối lưới(ESCO và EPC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-area pt-100 pb-70" id="footer">
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

      <div className="top-btn">
        <i className="bx bx-chevrons-up bx-fade-up"></i>
      </div>
    </div>
  );
};
export default PackageComponent;
