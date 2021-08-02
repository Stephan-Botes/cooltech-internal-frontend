import React from 'react'
import Cookies from 'universal-cookie';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CWidgetIcon,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {CChartBar} from "@coreui/react-chartjs";

const cookies = new Cookies();
const token = cookies.get('auth-token');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ous: [],
      divisions: [],
      users: []
    }
  }

  async componentDidMount() {
    await this.getData();
  }

  getData = async () => {
    await this.getOus();
    await this.getDivisions();
    await this.getUsers();
  }

  getOus = async () => {
    try {
      const response = await fetch('https://stepbot-cooltech-internal-api.herokuapp.com/ous/find/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      })
      const data = await response.json();
      this.setState({ous: data});
    } catch (err) {
      this.setState({fault: true});
    }
  }

  getDivisions = async () => {
    try {
      const response = await fetch('https://stepbot-cooltech-internal-api.herokuapp.com/divisions/find/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      })
      const data = await response.json();
      this.setState({divisions: data});
    } catch (err) {
      this.setState({fault: true});
    }
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
    const {ous, divisions, users} = this.state;
    let today = new Date();
    let date = today.toString();
    const loggedIn = cookies.get('auth-token');

    return (
      <>
        <CRow>
          <CCol xs="12" sm="6" lg="4">
            <CWidgetIcon
              text="Organisational Units"
              header={ous.length}
              color="primary"
              iconPadding={false}

              footerSlot={
                <CRow className="align-items-center">
                  <CCol col="6" sm="4" md="2" xl className="ml-xl-1 mt-1 mb-3 mb-xl-1 col-xl-4">
                    <CLink to="/ous" style={{textDecoration: "none"}}>
                      {loggedIn ?
                        <CButton block color="info">View</CButton> :
                        <CButton block color="secondary" disabled>View</CButton>
                      }
                    </CLink>
                  </CCol>
                </CRow>
              }
            >
              <CIcon width={24} name="cil-building" className="mx-5"/>
            </CWidgetIcon>
          </CCol>

          <CCol xs="12" sm="6" lg="4">
            <CWidgetIcon
              text="Divisions"
              header={divisions.length}
              color="success"
              iconPadding={false}

              footerSlot={
                <CRow className="align-items-center">
                  <CCol col="6" sm="4" md="2" xl className="ml-xl-1 mt-1 mb-3 mb-xl-1 col-xl-4">
                    <CLink to="/divisions" style={{textDecoration: "none"}}>
                      {loggedIn ?
                        <CButton block color="info">View</CButton> :
                        <CButton block color="secondary" disabled>View</CButton>
                      }
                    </CLink>
                  </CCol>
                </CRow>
              }
            >
              <CIcon width={24} name="cil-briefcase" className="mx-5"/>
            </CWidgetIcon>
          </CCol>

          <CCol xs="12" sm="6" lg="4">
            <CWidgetIcon
              text="Users"
              header={users.length}
              color="warning"
              iconPadding={false}

              footerSlot={
                <CRow className="align-items-center">
                  <CCol col="6" sm="4" md="2" xl className="ml-xl-1 mt-1 mb-3 mb-xl-1 col-xl-4">
                    <CLink to="/users" style={{textDecoration: "none"}}>
                      {loggedIn ?
                        <CButton block color="info">View</CButton> :
                        <CButton block color="secondary" disabled>View</CButton>
                      }
                    </CLink>
                  </CCol>
                </CRow>
              }
            >
              <CIcon width={24} name="cil-people" className="mx-5"/>
            </CWidgetIcon>
          </CCol>
        </CRow>

        <CCard>
          <CCardHeader>
            <h4 id="traffic" className="card-title mb-0">Recent OU activity</h4>
            <div className="small text-muted">{date}</div>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              datasets={[
                {
                  label: 'News Management',
                  backgroundColor: '#321fdb',
                  data: [32]
                },
                {
                  label: 'Software Reviews',
                  backgroundColor: '#2eb85c',
                  data: [72]
                },
                {
                  label: 'Hardware Reviews',
                  backgroundColor: '#f9b115',
                  data: [44]
                },
                {
                  label: 'Opinion Pieces',
                  backgroundColor: '#e55353',
                  data: [26]
                },
              ]}
              labels="months"
              options={{
                tooltips: {
                  enabled: true
                }
              }}
            />
          </CCardBody>
          <CCardFooter>
            <CRow className="text-center">
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">News Management</div>
                <strong>16 Updates (18%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="primary"
                  value={32}
                />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                <div className="text-muted">Software Reviews</div>
                <strong>36 Updates (41%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="success"
                  value={72}
                />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Hardware Reviews</div>
                <strong>22 Updates (26%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="warning"
                  value={44}
                />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Opinion Pieces</div>
                <strong>13 Updates (15%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="danger"
                  value={26}
                />
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </>
    )
  }
}

export default Dashboard
