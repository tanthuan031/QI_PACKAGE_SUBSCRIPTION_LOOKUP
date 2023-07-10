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

  const chinhsachbaomat = process.env.PUBLIC_URL + "/data/cs-bao-mat.pdf";
  const chinhsachthanhtoan = process.env.PUBLIC_URL + "/data/cs-thanh-toan.pdf";
  const chinhsachdichvu = process.env.PUBLIC_URL + "/data/cs-dich-vu.pdf";

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
            <CImage className="" rounded src={img} width={80} height={80} />
          </CNavLink>
          {/* </CHeaderBrand> */}
          <CHeaderNav className="mx-auto d-none d-lg-flex  me-auto d-md-flex">
            {/* <CNavItem> */}
            <CNavLink to="/" component={NavLink} onClick={scrollToTop}>
              Trang chủ
            </CNavLink>
            {/* </CNavItem> */}
            {/* <CNavItem> */}
            <CNavLink to="/product" component={NavLink} onClick={scrollToTop}>
              Gói cước
            </CNavLink>
            {/* </CNavItem> */}
            {/* <CNavItem> */}
            <CNavLink href="#footer">Về chúng tôi</CNavLink>
            {/* </CNavItem> */}
            {isCreatePayment ? (
              " "
            ) : (
              <CNavLink href="#footer">Liên hệ</CNavLink>
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
              <CNavLink
                href="/#find-section"
                className="btn btn-primary custom-btn text-white  "
              >
                Tra cứu ngay
              </CNavLink>
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
    </>
  );
};

export default AppHeader;
