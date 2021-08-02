import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CCollapse,
  CForm,
  CFormGroup,
  CLabel,
  CInput
} from "@coreui/react";
import Notification from "../notification/Notification";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get('auth-token');
const user = cookies.get('current-user');

const CredentialsTable = ({credentials, divisionID}) => {
  const [details, setDetails] = useState([]);
  const [newName, setNewName] = useState('');
  const [newLogin, setNewLogin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateLogin, setUpdateLogin] = useState('');
  const [updatePassword, setUpdatePassword] = useState('');
  const [notification, setNotification] = useState('');
  const [modal, setModal] = useState(false);
  const managerAccess = ((user.role === 'manager') || (user.role === 'admin'));

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const fields = [
    {key: 'name', _style: {width: '30%'}},
    {key: 'login', _style: {width: '25%'}},
    {key: 'password', _style: {width: '25%'}},
    {
      key: 'show_details',
      label: '',
      _style: {width: '1%'},
      sorter: false,
      filter: false
    }
  ]

  const onFieldChange = (event) => {
    if (event.target.name === 'new-name')
      setNewName(event.target.value);
    if (event.target.name === 'new-login')
      setNewLogin(event.target.value);
    if (event.target.name === 'new-password')
      setNewPassword(event.target.value);
    if (event.target.name === 'update-name')
      setUpdateName(event.target.value);
    if (event.target.name === 'update-login')
      setUpdateLogin(event.target.value);
    if (event.target.name === 'update-password')
      setUpdatePassword(event.target.value);
  }

  const handleResponse = (res) => {
    if (res.message)
      setNotification(res.message);
    clearInputs();
  }

  const clearInputs = () => {
    setNewName('');
    setNewLogin('')
    setNewPassword('');
    setUpdateName('');
    setUpdateLogin('')
    setUpdatePassword('');
    const inputs = document.getElementsByClassName('input-field');
    for (const input of inputs) {
      input.value = '';
    }
  }

  const addCredential = async () => {
    if (newName !== '' && newLogin !== '' && newPassword !== '') {
      const id = divisionID;
      const response = await fetch(`https://stepbot-cooltech-internal-api.herokuapp.com/divisions/add/credentials/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify({
          name: newName,
          login: newLogin,
          password: newPassword
        })
      })
      const feedback = await response.json();
      handleResponse(feedback);
    } else {
      const feedback = {message: 'You need to fill in all fields before adding.'}
      handleResponse(feedback);
    }
  }

  const updateCredential = async (item) => {
    if (updateName !== '' || updateLogin !== '' || updatePassword !== '') {
      const name = item.name;
      const login = item.login;
      const password = item.password;
      const id = divisionID;

      const response = await fetch(`https://stepbot-cooltech-internal-api.herokuapp.com/divisions/update/credentials/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify({
          name: name,
          login: login,
          password: password,
          newName: updateName,
          newLogin: updateLogin,
          newPassword: updatePassword
        })
      })
      const feedback = await response.json();
      handleResponse(feedback);
    } else {
      const feedback = {message: 'You need to fill at least one field before updating.'}
      handleResponse(feedback);
    }
  }

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CForm action="" method="POST">
                <CFormGroup row>
                  <CCol sm="6">
                    <CInput size="sm" type="text" id="new-name" name="new-name" className="input-sm input-field"
                            placeholder="New name"
                            onChange={onFieldChange}/>
                    <CInput size="sm" type="text" id="new-login" name="new-login" className="input-sm input-field"
                            placeholder="new login"
                            onChange={onFieldChange}/>
                    <CInput size="sm" type="text" id="new-password" name="new-password" className="input-sm input-field"
                            placeholder="New password" onChange={onFieldChange}/>
                  </CCol>
                </CFormGroup>
              </CForm>
              <CButton color="success" size="sm" onClick={() => {
                addCredential();
                setModal(!modal);
              }}>Add credential</CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={credentials}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'show_details':
                    (item, index) => {
                      return (
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={() => {
                              toggleDetails(index)
                            }}
                          >
                            {details.includes(index) ? 'Hide' : 'Show'}
                          </CButton>
                        </td>
                      )
                    },
                  'details':
                    (item, index) => {
                      return (
                        <CCollapse show={details.includes(index)}>
                          <CCardBody>
                            <CForm action="" method="PATCH">
                              <CFormGroup row>
                                <CCol sm="6">
                                  <CInput size="sm" type="text" name="update-name" className="input-sm input-field"
                                          placeholder="Update name"
                                          onChange={onFieldChange}/>
                                  <CInput size="sm" type="text" name="update-login" className="input-sm input-field"
                                          placeholder="Update login"
                                          onChange={onFieldChange}/>
                                  <CInput size="sm" type="text" name="update-password"
                                          className="input-sm input-field"
                                          placeholder="Update password" onChange={onFieldChange}/>
                                </CCol>
                              </CFormGroup>
                            </CForm>
                            {managerAccess ?
                              <CButton
                                size="sm"
                                color="warning"
                                onClick={() => {
                                  updateCredential(item);
                                  setModal(!modal);
                                }}
                              >Edit</CButton> :
                              <CButton size="sm" color="warning" disabled>Edit</CButton>
                            }
                            <CButton size="sm" color="danger" className="ml-1" disabled>
                              Delete
                            </CButton>
                          </CCardBody>
                        </CCollapse>
                      )
                    }
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Notification
        modal={modal}
        setModal={setModal}
        notification={notification}
        setNotification={setNotification}
        hrefCondition={true}
        hrefLink={'#'}/>
    </>
  );
}

export default CredentialsTable;
