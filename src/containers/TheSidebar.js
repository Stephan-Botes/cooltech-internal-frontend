import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem, CLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import logoFull from '../assets/icons/logo-full.png';
import logoMini from '../assets/icons/logo-minimized.png';
// sidebar nav config
import navigation from './_nav'
import navigationDisabled from './_navDisabled'

const TheSidebar = ({token}) => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  let navigationSource = navigationDisabled;
  if(token)
    navigationSource = navigation;

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          src={logoFull}
          height={50}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          src={logoMini}
          height={50}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigationSource}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
