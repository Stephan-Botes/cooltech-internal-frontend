import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import Cookies from "universal-cookie";

const TheLayout = () => {
  const cookies = new Cookies();
  const token = cookies.get('auth-token');
  const user = cookies.get('current-user');

  return (
    <div className="c-app c-default-layout">
      <TheSidebar token={token} user={user}/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
