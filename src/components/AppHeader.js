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
const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
  return (
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
  );
};

export default AppHeader;
