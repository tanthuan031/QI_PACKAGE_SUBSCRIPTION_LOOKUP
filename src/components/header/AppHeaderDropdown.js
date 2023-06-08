import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeaderNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilList,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import avatar8 from "./../../assets/images/avatars/8.jpg";
import { NavLink } from "react-router-dom";

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Menu
        </CDropdownHeader>
        <CDropdownItem href="#">Trang chủ</CDropdownItem>
        <CDropdownItem href="#footer">Về chúng tôi</CDropdownItem>
        <CDropdownItem href="#contact">Liên hệ</CDropdownItem>

        <CDropdownItem href="#">
          <CNavItem>
            <CNavLink
              href="#find-section"
              className="btn btn-primary custom-btn-header text-white   "
            >
              Tra cứu ngay
            </CNavLink>
          </CNavItem>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
