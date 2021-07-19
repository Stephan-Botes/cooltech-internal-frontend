import React, {Component} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CListGroup,
  CListGroupItem,
  CRow,
  CForm
} from "@coreui/react";
import Cookies from "universal-cookie";
import Notification from "../notification/Notification";

const cookies = new Cookies();
const token = cookies.get('auth-token');
const user = cookies.get('current-user');

class OrganisationalUnits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ou: [],
      divisions: [],
      loaded: false,
      fault: false,
      newId: '',
      notification: '',
      modal: ''
    }
    this.setModal = this.setModal.bind(this);
    this.setNotification = this.setNotification.bind(this);
  }

  async componentDidMount() {
    await this.getData();
  }

  getData = async () => {
    this.setState({loaded: false});
    await this.getOus();
    await this.getDivisions();
    this.setState({loaded: true});
  }

  getOus = async () => {
    try {
      const response = await fetch('/ous/find/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      })
      const data = await response.json();
      const singleOu = data.find(ou => ou.name === 'News Management');
      this.setState({ou: singleOu});
    } catch (err) {
      this.setState({fault: true});
    }
  }

  getDivisions = async () => {
    let divisionArray = [];
    const {ou} = this.state;
    if (ou) {
      for (const division of ou.divisions) {
        const divDetails = await this.fetchDivisionDetails(division.division_id);
        divisionArray.push(divDetails);
      }
      this.setState({divisions: divisionArray});
    } else {
      this.setState({fault: true});
    }
  }

  fetchDivisionDetails = async (id) => {
    try {
      const response = await fetch(`/divisions/find/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      })
      const data = await response.json();
      return data;
    } catch (err) {
      this.setState({fault: true});
    }
  }

  ouAccess = (ouId, user) => {
    if (user) {
      const userOus = user.ou;
      for (const ou of userOus) {
        if (ou.ou_id === ouId)
          return true;
      }
    }
    return false;
  }

  onFieldChange = (event) => {
    this.setState({newId: event.target.value});
  }

  addDivision = async () => {
    const response = await fetch(`/ous/add/division/60e705aad616322ba883c237`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      },
      body: JSON.stringify({
        division_id: this.state.newId
      })
    })
    const feedback = await response.json();
    this.handleResponse(feedback);
  }

  handleResponse = (res) => {
    if (res.message)
      this.setState({notification: res.message});
  }

  setNotification = (newNotification) => {
    this.setState({notification: newNotification});
  }

  setModal = (newModal) => {
    this.setState({modal: newModal});
  }

  render() {
    const {divisions, loaded, fault, notification, modal} = this.state;

    return (
      <>
        {(fault) ? <h1 style={{textAlign: "center"}}>A fault occurred.</h1> :
          (this.ouAccess('60e705aad616322ba883c237', user)) ?
            (
              <CRow>
                <CCol sm="12" xl="12">
                  <CCard>
                    <CCardHeader>Divisions</CCardHeader>
                    <CCol>
                      <CCard>
                        <CCardHeader>
                          <CForm action="" method="post">
                            <CFormGroup row>
                              <CCol sm="6">
                                <CInput size="sm"
                                        type="text"
                                        id="new-division-id"
                                        name="new-division-id"
                                        placeholder="Division ID"
                                        className="input-sm"
                                        onChange={this.onFieldChange}/>
                                <CButton color="success" size="sm" onClick={() => {
                                  this.addDivision();
                                  this.setState({modal: !modal})
                                }}>Add division</CButton>
                              </CCol>
                            </CFormGroup>
                          </CForm>
                        </CCardHeader>
                      </CCard>
                    </CCol>
                    <CCardBody>
                      {loaded ?
                        (
                          <CListGroup>
                            {divisions.map((division) => {
                              const hrefLink = `#/divisions/${division._id}`;
                              return (
                                <CListGroupItem href={hrefLink}>
                                  <p>ID: {division._id}</p>
                                  <p>Name: {division.name}</p>
                                </CListGroupItem>
                              )
                            })}
                          </CListGroup>
                        ) :
                        <p>Loading...</p>
                      }
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            ) : (
              <h1 style={{textAlign: "center"}}>Access denied.</h1>
            )
        }
        <Notification
          modal={modal}
          setModal={this.setModal}
          notification={notification}
          setNotification={this.setNotification}
          hrefCondition={true}
          hrefLink={'#'}/>
      </>
    );
  }
}

export default OrganisationalUnits;
