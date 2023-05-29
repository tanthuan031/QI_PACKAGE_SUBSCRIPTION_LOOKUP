import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavTitle,
    name: 'Quản lí tài sản',
  },
  {
    component: CNavGroup,
    name: 'Yêu cầu',
    to: '/tickets',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Đang mở',
        to: '/tickets/is-open',
      },
      {
        component: CNavItem,
        name: 'Đang theo dõi',
        to: '/tickets/follow',
      },
      {
        component: CNavItem,
        name: 'Phân công',
        to: '/tickets/assigned',
      },
      {
        component: CNavItem,
        name: 'Chưa giao',
        to: '/tickets/unassigned',
      },
      {
        component: CNavItem,
        name: 'Hoàn thành',
        to: '/tickets/completed',
      },
      {
        component: CNavItem,
        name: 'Khóa yêu cầu',
        to: '/tickets/posting',
      },
    ],
  },

  // Thanh toan

  {
    component: CNavTitle,
    name: 'Quản lí thanh toán',
  },
  {
    component: CNavGroup,
    name: 'Thanh toán',
    to: '/payment',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bảng kê nộp tiền',
        to: '/payment/statements',
      },
      {
        component: CNavItem,
        name: 'Phiếu thu',
        to: '/payment/receipts',
      },
      {
        component: CNavItem,
        name: 'Xuất thông báo cước',
        to: '/payment/chargenotices',
      },
    ],
  },

  // Khách hàng

  {
    component: CNavTitle,
    name: 'Quản lí khách hàng',
  },
  {
    component: CNavGroup,
    name: 'Khách hàng',
    to: '/payment',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Khách hàng',
        to: '/payment/statements',
      },
      {
        component: CNavItem,
        name: 'Thuê bao (NET/THC)',
        to: '/payment/receipts',
      },
      {
        component: CNavItem,
        name: 'STB',
        to: '/payment/chargenotices',
      },
      {
        component: CNavItem,
        name: 'Line-Kênh',
        to: '/payment/statements',
      },
    ],
  },
]

export default _nav
