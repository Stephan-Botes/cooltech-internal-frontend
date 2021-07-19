import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Cookies from "universal-cookie";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CBreadcrumbRouter,
  CLink, CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// routes config
import routes from '../routes'
import {TheHeaderDropdown} from './index'
import logoFull from "../assets/icons/logo-full.png";

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)
  const cookies = new Cookies();
  const token = cookies.get('auth-token');

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const logout = () => {
    cookies.remove('auth-token');
    cookies.remove('current-user');
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        {/*<CIcon name="logo" height="48" alt="Logo"/>*/}
        <CIcon
          className="c-sidebar-brand-full"
          src={logoFull}
          height="30"
        />
      </CHeaderBrand>
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
        </CHeaderNavItem>

        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
      </CHeaderNav>
      {/*Profile right-side dropdowns*/}
      <CHeaderNav className="px-3">
        {token ?
          <CLink to='/' onClick={() => {
            logout()
          }}>Logout</CLink> :
          <CLink to="/login">Login</CLink>
        }
        <TheHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
