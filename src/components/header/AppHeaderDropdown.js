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
import { Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { countCartItemSelector } from "src/redux/selectors/product/product.selector";

const AppHeaderDropdown = () => {
  const countCart = useSelector(countCartItemSelector);
  return (
    <>
      <div className="d-flex justify-conten-between">
        <CNavItem style={{ marginRight: "20px" }}>
          <CNavLink
            href="/#find-section"
            className="btn btn-primary btn-sm custom-btn-sm text-white  "
          >
            Tra cứu ngay
          </CNavLink>
        </CNavItem>
        <CNavItem style={{ marginRight: "20px" }}>
          <CNavLink href="/cart">
            <FaShoppingCart style={{ fontSize: "1.3rem" }} />
            <Badge style={{ position: "absolute" }}>{countCart}</Badge>
          </CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item">
          <CDropdownToggle
            placement="bottom-end"
            className="py-0"
            caret={false}
          >
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
            <CDropdownItem href="/">Trang chủ</CDropdownItem>
            <CDropdownItem href="#footer">Về chúng tôi</CDropdownItem>
            <CDropdownItem href="#contact">Liên hệ</CDropdownItem>

            {/* <CDropdownItem href="#">
             
              <CNavLink
                href="/#find-section"
                className="btn btn-primary custom-btn-header text-white   "
              >
                Tra cứu ngay
              </CNavLink>
         
            </CDropdownItem> */}
          </CDropdownMenu>
        </CDropdown>
      </div>
    </>
  );
};

export default AppHeaderDropdown;
