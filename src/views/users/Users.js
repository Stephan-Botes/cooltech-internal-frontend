import React, {Component} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

import UsersTable from "./UsersTable";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get('auth-token');

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      users: [],
      loaded: false,
      fault: false
    }
  }

  componentDidMount = async () => {
    await this.getData();
  }

  getData = async () => {
    this.setState({loaded: false});
    await this.getUsers();
    this.setState({loaded: true});
  }

  getUsers = async () => {
    const response = await fetch(`https://stepbot-cooltech-internal-api.herokuapp.com/users/find/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    })

    const data = await response.json();
    this.setState({users: data});
  }

  render() {
    const {users} = this.state;

    return (
      <CRow>
        <CCol sm="12" xl="12">
          <CCard>
            <CCardHeader>Users</CCardHeader>
            <CCardBody>
              <UsersTable users={users} divisionID={null} all={true}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
}

export default Users
