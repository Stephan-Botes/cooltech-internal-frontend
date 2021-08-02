import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CContainer, CJumbotron, CLink,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const cookies = new Cookies();
const token = cookies.get('auth-token');
const user = cookies.get('current-user');

class OrganisationalUnits extends Component {
  constructor() {
    super();
    this.state = {
      ous: [],
      loaded: false,
      newsAccess: false,
      softwareAccess: false,
      hardwareAccess: false,
      opinionAccess: false
    }
  }

  componentDidMount = async () => {
    await this.getData();
  }

  getData = async () => {
    await this.getOus();
    const newsAccess = this.ouAccess('60e705aad616322ba883c237', user, 'news');
    if (newsAccess)
      this.setState({newsAccess: true});
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

  render() {
    const newsAccess = this.ouAccess('60e705aad616322ba883c237', user);
    const softwareAccess = this.ouAccess('60e705b7d616322ba883c239', user);
    const hardwareAccess = this.ouAccess('60e705bed616322ba883c23b', user);
    const opinionAccess = this.ouAccess('60e705d0d616322ba883c23d', user);

    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                News Management
              </CCardHeader>
              <CCardBody>
                <CJumbotron fluid>
                  <CContainer fluid>
                    <CIcon
                      className="c-sidebar-brand-full"
                      // name="logo-negative"
                      src="https://img.icons8.com/ios/100/000000/news.png"
                      style={{display: "flex", margin: "auto"}}
                      // height={50}
                    />
                  </CContainer>
                </CJumbotron>
                <CLink to="/ous/news-management" style={{textDecoration: "none"}}>
                  {newsAccess ?
                    <CButton block color="info">View</CButton> :
                    <CButton block color="secondary" disabled>View</CButton>
                  }
                </CLink>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardHeader>
                Software Reviews
              </CCardHeader>
              <CCardBody>
                <CJumbotron fluid>
                  <CContainer fluid>
                    <CIcon
                      className="c-sidebar-brand-full"
                      // name="logo-negative"
                      src="https://img.icons8.com/ios/100/000000/software-box.png"
                      style={{display: "flex", margin: "auto"}}
                      // height={50}
                    />
                  </CContainer>
                </CJumbotron>
                <CLink to="/ous/software-reviews" style={{textDecoration: "none"}}>
                  {softwareAccess ?
                    <CButton block color="info">View</CButton> :
                    <CButton block color="secondary" disabled>View</CButton>
                  }
                </CLink>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                Hardware Reviews
              </CCardHeader>
              <CCardBody>
                <CJumbotron fluid>
                  <CContainer fluid>
                    <CIcon
                      className="c-sidebar-brand-full"
                      // name="logo-negative"
                      src="https://img.icons8.com/wired/100/000000/video-card.png"
                      style={{display: "flex", margin: "auto"}}
                      // height={50}
                    />
                  </CContainer>
                </CJumbotron>
                <CLink to="/ous/hardware-reviews" style={{textDecoration: "none"}}>
                  {hardwareAccess ?
                    <CButton block color="info">View</CButton> :
                    <CButton block color="secondary" disabled>View</CButton>
                  }
                </CLink>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardHeader>
                Opinion Pieces
              </CCardHeader>
              <CCardBody>
                <CJumbotron fluid>
                  <CContainer fluid>
                    <CIcon
                      className="c-sidebar-brand-full"
                      // name="logo-negative"
                      src="https://img.icons8.com/windows/100/000000/same-opinion.png"
                      style={{display: "flex", margin: "auto"}}
                      // height={50}
                    />
                  </CContainer>
                </CJumbotron>
                <CLink to="/ous/opinion-pieces" style={{textDecoration: "none"}}>
                  {opinionAccess ?
                    <CButton block color="info">View</CButton> :
                    <CButton block color="secondary" disabled>View</CButton>
                  }
                </CLink>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default OrganisationalUnits;
