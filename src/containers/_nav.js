import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name='cil-spreadsheet' customClasses='c-sidebar-nav-icon'/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Organisational Units',
    route: '/ous',
    icon: 'cil-building',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'News Management',
        to: '/ous/news-management',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Software Reviews',
        to: '/ous/software-reviews',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Hardware Reviews',
        to: '/ous/hardware-reviews',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Opinion Publishing',
        to: '/ous/opinion-pieces',
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Divisions',
    to: '/divisions',
    icon: 'cil-briefcase'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    icon: 'cil-people'
  }
]

export default _nav
