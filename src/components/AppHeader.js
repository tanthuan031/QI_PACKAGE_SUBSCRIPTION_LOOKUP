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
const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

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

        <CNavLink to="#" component={NavLink}>
          <CImage className="" rounded src={img} width={100} height={100} />
        </CNavLink>
        {/* </CHeaderBrand> */}
        <CHeaderNav className="mx-auto d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="#" component={NavLink}>
              Trang chủ
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#footer">Về chúng tôi</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#contact">Liên hệ</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#find-section"
              className="btn btn-primary custom-btn text-white  "
            >
              Tra cứu ngay
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
