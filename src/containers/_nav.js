import React from 'react'
import CIcon from '@coreui/icons-react'
import {freeSet} from "@coreui/icons"
const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    roles: []
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Iklan']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu Iklan',
    route: '/base',
    icon: <CIcon content={freeSet['cilPaperclip']} className="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Iklan Slide Banner',
        to: '/adsslidebanner',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Iklan Popup Banner',
        to: '/adsbanner',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Iklan Audio',
        to: '/adsaudio',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pembayaran',
    route: '/base',
    icon: <CIcon content={freeSet['cilMoney']} className="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Approve Pembayaran Akun',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Approve Pembayaran Iklan',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Upload Music',
    to: '/upload-music',
    icon: <CIcon content={freeSet['cilCloudUpload']} className="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label Music',
    to: '/label-music',
    icon: <CIcon content={freeSet['cilMusicNote']} className="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Unggah Content',
    route: '/base',
    icon: <CIcon content={freeSet['cilPencil']} className="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Content Pricing Iklan',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Content Pricing Member',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Content FAQ',
        to: '/contentFAQ',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Content About Us',
        to: '/content-about',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Share Notifikasi',
    to: '/shareNotifikasi',
    icon: <CIcon content={freeSet['cilPaperPlane']} className="c-sidebar-nav-icon" /> ,
  },
]

export default _nav
