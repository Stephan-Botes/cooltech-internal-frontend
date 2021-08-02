import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Cookies from 'universal-cookie';
import Notification from "../../notification/Notification";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [modal, setModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const onFieldChange = (event) => {
    if (event.target.name === 'email')
      setEmail(event.target.value);
    if (event.target.name === 'password')
      setPassword(event.target.value);
  }

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }

  const handleResponse = (res) => {
    if (res.message)
      setNotification(res.message);
    else {
      setLoggedIn(true);
      setNotification('Logged in.');
      clearInputs();
    }
  }

  const submitLoginInfo = async () => {
    try {
      const response = await fetch(`https://stepbot-cooltech-internal-api.herokuapp.com/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      const token = await response.headers.get('auth-token');
      const body = await response.json();
      if (token) {
        const cookies = new Cookies();
        const user = body;
        cookies.set('auth-token', token);
        cookies.set('current-user', user);
      }
      handleResponse(body);
    } catch (err) {
      handleResponse({message: 'Server is offline.'})
    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {/*email input*/}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={onFieldChange}
                      />
                    </CInputGroup>
                    {/*Password input*/}
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={onFieldChange}
                      />
                    </CInputGroup>
                    {/*login button*/}
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary"
                                 className="px-4"
                                 onClick={() => {
                                   setModal(!modal);
                                   submitLoginInfo();
                                 }}
                        >Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/*Signup section*/}
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      <Notification
        modal={modal}
        setModal={setModal}
        notification={notification}
        setNotification={setNotification}
        hrefCondition={loggedIn}
      hrefLink={'#/dashboard'}/>
    </div>
  )
}

export default Login
