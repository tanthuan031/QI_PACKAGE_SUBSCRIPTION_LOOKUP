import ImageBackgroundLogo from "../../assets/img/logo_qi.png";
const Footer = () => {
  const chinhsachbaomat = process.env.PUBLIC_URL + "/data/cs-bao-mat.doc";
  const chinhsachthanhtoan =
    process.env.PUBLIC_URL + "/data/cs-thanh-toan.docx";
  const chinhsachdichvu = process.env.PUBLIC_URL + "/data/cs-dich-vu.docx";

  const DK_CHUNG =
    process.env.PUBLIC_URL +
    "/data/DIEU-KHOAN-CHUNG-HOP-DONG-CUNG-CAP-VA-SU-DUNG-DICH-VU-QI.html";
  const MAU_HD =
    process.env.PUBLIC_URL + "/data/MAU-HOP-DONG-INTERNET-QINET-NEW.html";
  return (
    <>
      <footer className="footer-area pt-100 pb-70 mt-5" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/">
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
                  <a
                    href="https://www.facebook.com/QiTechnologies"
                    target="_blank"
                  ></a>
                  <a
                    href="https://www.linkedin.com/company/qi-technologies-corporation"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCKXpvNwUuxxmpWOqUBkodcQ"
                    target="_blank"
                  >
                    <i className="bx bxl-youtube text-danger"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/QiTechnologies"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget pl-60">
                <h3>Tài liệu kham khảo</h3>
                <ul>
                  <li>
                    <a href={DK_CHUNG} target="_blank">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Điều khoản chung
                    </a>
                  </li>
                  <li>
                    <a href={MAU_HD} target="_blank">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Hợp đồng cung cấp dịch vụ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://qi.com.vn/docs/Q%C4%90-30-Bo-sung-bang-gia-cuoc-dich-vu.pdf"
                      target="_blank"
                    >
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
                    <a href="https://qi.com.vn/about-us">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a href="https://qi.com.vn/career">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Tuyển dụng
                    </a>
                  </li>
                  <li>
                    <a href="https://qi.com.vn/contact">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Liên hệ
                    </a>
                  </li>
                  <li>
                    <a href="https://qi.com.vn/customer-partner">
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Khách hàng - Đối tác
                    </a>
                  </li>
                  {/* <li>
                    <a href={chinhsachbaomat} download>
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a href={chinhsachthanhtoan}>
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Chính sách thanh toán
                    </a>
                  </li>
                  <li>
                    <a href={chinhsachdichvu}>
                      <i className="bx bx-chevrons-right bx-tada"></i>
                      Chính sách sử dụng dịch vụ
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget footer-info">
                <h3>Thông Tin Liên Hệ</h3>
                <ul>
                  <li>
                    <span>
                      <i className="bx bx-buildings"></i>
                      Công ty:
                    </span>
                    <a
                      href="https://qi.com.vn"
                      style={{ textDecoration: "none" }}
                    >
                      CÔNG TY CỔ PHẦN CÔNG NGHỆ QI
                    </a>
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
                      <i className="bx bx-code"></i>
                      Mã số thuế:
                    </span>
                    <a href="tel:0305350288" style={{ textDecoration: "none" }}>
                      0305350288 ( 30/11/2007 )
                      <br />
                      <span style={{ paddingLeft: "25px" }}>
                        cấp tại Sở Kế hoạch và Đầu tư TPHCM
                      </span>
                    </a>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-phone"></i>
                      Số điện thoại:
                    </span>
                    <a href="tel:0917888749"> 1900633827- 0917888749</a>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-envelope"></i>
                      Email:
                    </span>
                    <a href="mailto:csc@qi.com.vn"> csc@qi.com.vn </a>
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
    </>
  );
};

export default Footer;
