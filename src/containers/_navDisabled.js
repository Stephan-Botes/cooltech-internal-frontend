import React from 'react'
import CIcon from '@coreui/icons-react'

const _navDisabled = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/',
    icon: <CIcon name='cil-spreadsheet' customClasses='c-sidebar-nav-icon'/>
,  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Organisational Units',
    // route: '/',
    icon: 'cil-building',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Divisions',
    // to: '/',
    icon: 'cil-briefcase'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    // to: '/',
    icon: 'cil-people'
  }
]

export default _navDisabled
