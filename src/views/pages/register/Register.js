import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CSelect,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [role, setRole] = useState('user');
  const [notification, setNotification] = useState('');
  const [modal, setModal] = useState(false);
  const [registered, setRegistered] = useState(false);

  const onFieldChange = (event) => {
    if (event.target.name === 'email')
      setEmail(event.target.value);
    if (event.target.name === 'password')
      setPassword(event.target.value);
    if (event.target.name === 'firstname')
      setFirstname(event.target.value);
    if (event.target.name === 'lastname')
      setLastname(event.target.value);
    if (event.target.name === 'role')
      setRole(event.target.value);
  }

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setRole('user');
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('role').value = 'user';
  }

  const handleResponse = (res) => {
    console.log(res)
    if (res.message)
      setNotification(res.message);
    clearInputs();
  }

  const submitLoginInfo = async () => {
    const response = await fetch(`https://stepbot-cooltech-internal-api.herokuapp.com/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        role: role
      })
    })
    const feedback = await response.json();
    handleResponse(feedback);
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  {/*email input*/}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
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
                  {/*password input*/}
                  <CInputGroup className="mb-3">
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
                      autoComplete="new-password"
                      onChange={onFieldChange}
                    />
                  </CInputGroup>
                  {/*firstname input*/}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user"/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="First name"
                      autoComplete="username"
                      onChange={onFieldChange}
                    />
                  </CInputGroup>
                  {/*lastname input*/}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user"/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Last name"
                      autoComplete="username"
                      onChange={onFieldChange}
                    />
                  </CInputGroup>
                  {/*role input*/}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user"/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CSelect custom name="role" id="role" onChange={onFieldChange}>
                      <option value="user">Role</option>
                      <option value="user">User</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </CSelect>
                  </CInputGroup>
                  <CButton color="success"
                           onClick={() => {
                             setModal(!modal);
                             submitLoginInfo();
                           }}
                  >Create Account</CButton>
                  <CLink to="/login" style={{textDecoration: "none"}} className="ml-1">
                    <CButton color="info">Login</CButton>
                  </CLink>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      {/*Notification Modal*/}
      <CModal show={modal} onClose={() => {setModal(false)}}>
        <CModalHeader closeButton>
          <CModalTitle>Edit Entry</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCol xs="12">
            <CCardBody>
              {notification}
            </CCardBody>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => {
              setModal(false)
            }}
            href={registered ? "#/dashboard" : "#"}
          >Ok</CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Register
