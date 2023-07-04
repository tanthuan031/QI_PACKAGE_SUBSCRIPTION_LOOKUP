import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage,
  CNavGroup,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
import img from "../assets/img/logo_qi.png";
import { isCreatePaymentSelector } from "src/redux/selectors";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { countCartItemSelector } from "src/redux/selectors/product/product.selector";
import {
  setCountCartItem,
  setIsCartItem,
} from "src/redux/reducer/product/product.reducer";
import { setIsCreatePayment } from "src/redux/reducer/payment/payment.reducer";
import Modal from "./commons/Layouts/Modal";
const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const [visibleXL, setVisibleXL] = useState(false);
  const [show, setShowDetail] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(setIsCreatePayment(false));
  }
  const isCreatePayment = useSelector(isCreatePaymentSelector);
  const [countDataCart, setCountDataCart] = useState(0);

  const countCart = useSelector(countCartItemSelector);
  const handleShowCart = () => {
    dispatch(setIsCartItem(true));
  };
  useEffect(() => {
    const existingCartCountData =
      JSON.parse(localStorage.getItem("countCart")) || 0;
    dispatch(setCountCartItem(existingCartCountData));
  }, [dispatch]);
  const reloadPage = () => {
    window.location.href = "/";
  };

  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const togglePolicy = () => {
    setIsPolicyOpen(!isPolicyOpen);
  };

  const chinhsachbaomat = process.env.PUBLIC_URL + "/data/CS-Bảo-mật.html";
  const chinhsachthanhtoan =
    process.env.PUBLIC_URL + "/data/CS-thanh-toán.html";
  const chinhsachdichvu = process.env.PUBLIC_URL + "/data/CS-Sd-dịch-vụ.html";
  const handleOpenWordDocument = () => {
    const wordDocumentUrl = "path/to/your/word/document.docx";
    window.open(chinhsachbaomat);
  };

  return (
    <>
      <CHeader position="sticky" className="">
        <CContainer>
          {/* <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler> */}
          {/* <CHeaderBrand className="mx-auto d-md-none" to="/"> */}

          <CNavLink to="https://qi.com.vn" component={NavLink}>
            <CImage className="" rounded src={img} width={100} height={100} />
          </CNavLink>
          {/* </CHeaderBrand> */}
          <CHeaderNav className="mx-auto d-none d-lg-flex  me-auto d-md-flex">
            <CNavItem>
              <CNavLink to="/" component={NavLink} onClick={scrollToTop}>
                Trang chủ
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/product" component={NavLink} onClick={scrollToTop}>
                Gói cước
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#footer">Về chúng tôi</CNavLink>
            </CNavItem>
            {isCreatePayment ? (
              " "
            ) : (
              <CNavItem>
                <CNavLink href="#contact">Liên hệ</CNavLink>
              </CNavItem>
            )}

            <CDropdown variant="nav-item">
              <CDropdownToggle color="secondary">Chính sách</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href={chinhsachbaomat} target="_blank">
                  Chính sách bảo mật
                </CDropdownItem>
                <CDropdownItem href={chinhsachthanhtoan} target="_blank">
                  Chính sách thanh toán
                </CDropdownItem>
                <CDropdownItem href={chinhsachdichvu} target="_blank">
                  Chính sách sử dụng dịch vụ
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            {isCreatePayment ? (
              ""
            ) : (
              <CNavItem>
                <CNavLink
                  href="/#find-section"
                  className="btn btn-primary custom-btn text-white  "
                >
                  Tra cứu ngay
                </CNavLink>
              </CNavItem>
            )}
          </CHeaderNav>

          {/* <CNavItem className="d-none d-md-flex "> */}
          <div
            style={{ position: "relative" }}
            className="cart-item d-none d-lg-flex d-md-flex"
          >
            <CNavLink href="/cart">
              <FaShoppingCart style={{ fontSize: "1.3rem" }} />
              <Badge style={{ position: "absolute" }}>{countCart}</Badge>
            </CNavLink>
          </div>
          {/* </CNavItem> */}

          {isCreatePayment ? (
            ""
          ) : (
            <CHeaderNav className="ms-3 disabled-none">
              <AppHeaderDropdown />
            </CHeaderNav>
          )}
        </CContainer>
      </CHeader>
      {/* <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader>
          <CModalTitle>Chính sách bảo mật</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="card-overlay">
            <h4>I. CHÍNH SÁCH BẢO MẬT THÔNG TIN: </h4>
            <h5>
1. Mục đích thu thập thông tin cá nhân
            </h5> Mục đích của việc thu thập
            thông tin khách hàng nhằm liên quan đến các vấn đề như: - Hỗ trợ
            khách hàng: mua hàng, thanh toán, giao hàng. - Cung cấp thông tin
            sản phẩm, các dịch vụ và hỗ trợ theo yêu cầu của khách hàng. - Gửi
            thông báo các chương trình, sản phẩm mới nhất của chúng tôi. - Giải
            quyết vấn đề phát sinh , giải quyết thắc mắc khi KH đăng kí sử dụng
            dịch vụ 2. Phạm vi thu thập thông tin Chúng tôi thu thập thông tin
            cá nhân của khách hàng khi tiến hàng đặt hàng trên website : Họ tên
            : Địa chỉ email : Số điện thoại : Địa chỉ : 3. Thời gian lưu trữ
            thông tin Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi
            có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ.
            Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được
            bảo mật trên máy chủ của tracuu.qi.com.vn 4. Những người hoặc tổ
            chức có thể được tiếp cận với thông tin đó – Đối với các bên vận
            chuyển, sẽ cung cấp các thông tin để phục vụ cho việc giao nhận hàng
            hóa như Tên, địa chỉ và số điện thoại. – Đối với nhân viên công ty
            sẽ có các bộ phận chuyên trách để phục vụ việc chăm sóc khách hàng
            trong quá trình sử dụng dịch vụ – Các chương trình có tính liên kết,
            đồng thực hiện, thuê ngoài cho các mục đích được nêu tại Mục 1 và
            luôn áp dụng các yêu cầu bảo mật thông tin cá nhân. – Yêu cầu pháp
            lý: Chúng tôi có thể tiết lộ các thông tin cá nhân nếu điều đó do
            luật pháp yêu cầu và việc tiết lộ như vậy là cần thiết một cách hợp
            lý để tuân thủ các quy trình pháp lý. – Chuyển giao kinh doanh (nếu
            có): trong trường hợp sáp nhập, hợp nhất toàn bộ hoặc một phần với
            công ty khác, người mua sẽ có quyền truy cập thông tin được chúng
            tôi lưu trữ, duy trì trong đó bao gồm cả thông tin cá nhân. 5. Địa
            chỉ của đơn vị thu thập và quản lý thông tin - Tên doanh nghiệp:
            CÔNG TY CỔ PHẦN CÔNG NGHỆ QI – Thành lập và hoạt động theo Giấy
            chứng nhận đăng ký doanh nghiệp số: 0305350288 do Sở Kế hoạch và Đầu
            tư thành phố Hồ Chí Minh cấp ngày 30 tháng 11 năm 2007. – Trụ sở
            chính: Lô U, 14b-16a, Đường số 22, Khu chế xuất Tân Thuận, Phường
            Tân Thuận Đông , Quận 7, Thành phố Hồ Chí Minh 6. Phương thức và
            công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu: Nếu quý khách
            có bất cứ về yêu cầu nào về việc tiếp cận và chỉnh sửa thông tin cá
            nhân đã cung cấp, quý khách có thể: - Gọi điện trực tiếp về số điện
            thoại: 1900633827 - Gửi mail: csc@qi.com.vn Cơ chế tiếp nhận và giải
            quyết khiếu nại của người tiêu dùng liên quan đến việc thông tin cá
            nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo: Tại
            tracuu.qi.com.vn , việc bảo vệ thông tin cá nhân của bạn là rất quan
            trọng, bạn được đảm bảo rằng thông tin cung cấp cho chúng tôi sẽ
            được mật tracuu.qi.com.vn cam kết không chia sẻ, bán hoặc cho thuê
            thông tin cá nhân của bạn cho bất kỳ người nào khác. vuoncuabe.vncam
            kết chỉ sử dụng các thông tin của bạn vào các trường hợp sau: – Nâng
            cao chất lượng dịch vụ dành cho khách hàng – Giải quyết các tranh
            chấp, khiếu nại – Khi cơ quan pháp luật có yêu cầu. tracuu.qi.com.vn
            hiểu rằng quyền lợi của bạn trong việc bảo vệ thông tin cá nhân cũng
            chính là trách nhiệm của chúng tôi nên trong bất kỳ trường hợp có
            thắc mắc, góp ý nào liên quan đến chính sách bảo mật của
            tracuu.qi.com.vn , và liên quan đến việc thông tin cá nhân bị sử
            dụng sai mục đích hoặc phạm vi đã thông báo vui lòng liên hệ qua số
            hotline 1900633827 hoặc email: csc@qi.com.vn để xử lý và làm việc
            trực tiếp với khách hàng.
          </div>
        </CModalBody>
      </CModal> */}
    </>
  );
};

export default AppHeader;
