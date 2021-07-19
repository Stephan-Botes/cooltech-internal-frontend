import React from 'react'
import Cookies from "universal-cookie";
import {
  CDropdown,
  CDropdownToggle,
  CImg, CLink
} from '@coreui/react'

const TheHeaderDropdown = () => {
  const cookies = new Cookies();
  const user = cookies.get('current-user');
  let role, userPage;
  if (user){
    userPage = `/users/${user.id}`;
    role = user.role;
  }

  let profilePic = "https://img.icons8.com/ios-glyphs/50/000000/question-mark.png";
  if (role === 'user')
    profilePic = "https://img.icons8.com/material-rounded/50/000000/user.png";
  if (role === 'manager')
    profilePic = "https://img.icons8.com/material-rounded/50/000000/manager.png";
  if (role === 'admin')
    profilePic = "https://img.icons8.com/material-rounded/48/000000/landlord.png";


  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={profilePic}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      {/*<CDropdownMenu className="pt-0" placement="bottom-end">*/}
      {/*  <CDropdownItem>*/}
      {/*    <CIcon name="cil-user" className="mfe-2"/>*/}
      {/*    <CLink to={userPage} style={{textDecoration: "none", color: "#4f5d73"}}>Profile</CLink>*/}
      {/*  </CDropdownItem>*/}
      {/*</CDropdownMenu>*/}
    </CDropdown>
  )
}

export default TheHeaderDropdown
