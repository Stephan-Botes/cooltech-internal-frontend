import React, {Component, useState} from 'react';

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm, CFormGroup, CInput, CListGroup, CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CTabs
} from "@coreui/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get('auth-token');
const user = cookies.get('current-user');

class Divisions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divisions: [],
      loaded: false,
      fault: false
    }
  }

  async componentDidMount() {
    await this.getData();
  }

  // async componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.state.divisions !== prevState.divisions) {
  //     await this.getData();
  //   }
  // }

  getData = async () => {
    await this.setState({loaded: false});
    await this.getDivisions();
    await this.setState({loaded: true});
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

  // const createDivision = async () => {
  //   if (newName !== '' && newLogin !== '' && newPassword !== '') {
  //     const id = divisionID;
  //     const response = await fetch(`https://stepbot-cooltech-internal-api.herokuapp.com/divisions/add/credentials/${id}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'auth-token': token
  //       },
  //       body: JSON.stringify({
  //         name: newName,
  //         login: newLogin,
  //         password: newPassword
  //       })
  //     })
  //     const feedback = await response.json();
  //     handleResponse(feedback);
  //   } else {
  //     const feedback = {message: 'You need to fill in all fields before adding.'}
  //     handleResponse(feedback);
  //   }
  // }

  render() {
    const {divisions, loaded} = this.state;
    return (
      <>
        <CRow>
          <CCol sm="12" xl="12">
            <CCard>
              <CCardHeader>Divisions
                <CCardHeader>
                  {/*<CForm action="" method="POST">*/}
                  {/*  <CFormGroup row>*/}
                  {/*    <CCol sm="6">*/}
                  {/*      <CInput size="sm" type="text" id="new-name" name="new-name" className="input-sm input-field"*/}
                  {/*              placeholder="New name"*/}
                  {/*              onChange={onFieldChange}/>*/}
                  {/*      <CInput size="sm" type="text" id="new-login" name="new-login" className="input-sm input-field"*/}
                  {/*              placeholder="new login"*/}
                  {/*              onChange={onFieldChange}/>*/}
                  {/*      <CInput size="sm" type="text" id="new-password" name="new-password" className="input-sm input-field"*/}
                  {/*              placeholder="New password" onChange={onFieldChange}/>*/}
                  {/*    </CCol>*/}
                  {/*  </CFormGroup>*/}
                  {/*</CForm>*/}
                  {/*<CButton color="success" size="sm" onClick={() => {*/}
                  {/*  addCredential();*/}
                  {/*  setModal(!modal);*/}
                  {/*}}>Add credential</CButton>*/}
                </CCardHeader>
              </CCardHeader>
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
                  <p>Loading</p>
                }
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Divisions;
