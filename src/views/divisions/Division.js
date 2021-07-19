import React, {Component} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CTabs
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import UsersTable from "../users/UsersTable";
import CredentialsTable from "./CredentialsTable";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get('auth-token');
const user = cookies.get('current-user');

class Division extends Component {
  constructor({match}) {
    super({match});
    this.state = {
      active: 0,
      division: [],
      users: [],
      loaded: false,
      fault: false
    }
  }

  async componentDidMount() {
    await this.getData();
  }

  // componentDidUpdate = async (prevProps, prevState) => {
  //   if (prevState.division !== this.state.division) {
  //     await this.getData();
  //   }
  // }

  getData = async () => {
    this.setState({loaded: false});
    await this.getDivision();
    await this.getUsers();
    this.setState({loaded: true});
  }

  getDivision = async () => {
    try {
      const id = this.props.match.params.id;
      const response = await fetch(`/divisions/find/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      })
      const data = await response.json();
      this.setState({division: data});
    } catch (err) {
      this.setState({fault: true});
    }
  }

  getUsers = async () => {
    const response = await fetch(`/users/find/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    })
    const data = await response.json();
    this.setState({users: data});
  }

  setActive = (idx) => {
    this.setState({active: idx})
  }

  divisionAccess = (divisionId, user) => {
    if (user) {
      const userOus = user.ou;
      for (const ou of userOus) {
        if (ou.division_id === divisionId)
          return true;
      }
    }
    return false;
  }

  render() {
    const {division, users, loaded, fault} = this.state;
    const credentials = (division ? division.credentials : []);
    const divisionID = (division ? division._id : '');
    return (
      <>
        {(fault) ? <h1 style={{textAlign: "center"}}>A fault occurred.</h1> :
          (this.divisionAccess(divisionID, user)) ?
            <CRow>
              <CCol lg={12}>
                <CCard>
                  <CCardHeader>
                    <h4>ID: {division._id}</h4>
                    <h4>{division.name}</h4>
                  </CCardHeader>
                  <CCardBody>
                    {loaded ?
                      (
                        <CTabs activeTab={this.state.active} onActiveTabChange={idx => this.setActive(idx)}>
                          <CNav variant="tabs">
                            <CNavItem>
                              <CNavLink>
                                <CIcon name="cil-list-rich"/>
                                {this.state.active === 0 && ' Credentials'}
                              </CNavLink>
                            </CNavItem>
                            <CNavItem>
                              <CNavLink>
                                <CIcon name="cil-people"/>
                                {this.state.active === 1 && ' Users'}
                              </CNavLink>
                            </CNavItem>
                          </CNav>

                          <CTabContent>

                            <CTabPane>
                              <CredentialsTable credentials={credentials} divisionID={divisionID}/>
                            </CTabPane>

                            <CTabPane>
                              <UsersTable users={users} divisionID={divisionID} all={false}/>
                            </CTabPane>

                          </CTabContent>
                        </CTabs>
                      ) :
                      <p>Loading...</p>
                    }
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            : <h1 style={{textAlign: "center"}}>Access denied.</h1>
        }
      </>
    );
  }
}

export default Division
