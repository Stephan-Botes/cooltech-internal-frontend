import React, {useState} from 'react';
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
  CInput,
  CInputGroup,
  CSelect,
} from "@coreui/react";
import Cookies from "universal-cookie";
import Notification from "../notification/Notification";

const cookies = new Cookies();
const token = cookies.get('auth-token');
const loggedUser = cookies.get('current-user');

const UsersTable = ({users, divisionID, all}) => {
  const [details, setDetails] = useState([]);
  const [modal, setModal] = useState(false);
  const [ouID, setOuID] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updatePassword, setUpdatePassword] = useState('');
  const [updateFirstname, setUpdateFirstname] = useState('');
  const [updateLastname, setUpdateLastname] = useState('');
  const [updateRole, setUpdateRole] = useState('user')
  const [notification, setNotification] = useState('');
  const adminAccess = (loggedUser.role === 'admin');

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
    {key: 'email', _style: {width: '17%'}},
    {key: 'password', _style: {width: '50%'}},
    {key: 'firstname', _style: {width: '10%'}},
    {key: 'lastname', _style: {width: '10%'}},
    {key: 'role', _style: {width: '10%'}},
    {
      key: 'show_details',
      label: '',
      _style: {width: '1%'},
      sorter: false,
      filter: false
    }
  ]

  const onFieldChange = (event) => {
    if (event.target.name === 'new-user-email')
      setNewUserEmail(event.target.value);
    if (event.target.name === 'update-email')
      setUpdateEmail(event.target.value);
    if (event.target.name === 'update-password')
      setUpdatePassword(event.target.value);
    if (event.target.name === 'update-firstname')
      setUpdateFirstname(event.target.value);
    if (event.target.name === 'update-lastname')
      setUpdateLastname(event.target.value);
    if (event.target.name === 'update-role')
      setUpdateRole(event.target.value);
  }

  const handleResponse = (res) => {
    if (res.message)
      setNotification(res.message);
    clearInputs();
  }

  const clearInputs = () => {
    setNewUserEmail('');
    setUpdateEmail('');
    setUpdatePassword('')
    setUpdateFirstname('');
    setUpdateLastname('');
    const inputs = document.getElementsByClassName('input-field');
    for (const input of inputs) {
      input.value = '';
    }
  }

  const filterUsers = () => {
    let filteredUsers = [];
    if (!divisionID) {
      filteredUsers = users;
      return filteredUsers;
    } else {
      users.forEach((user) => {
        user.ou.forEach((unit) => {
          if (unit.division_id === divisionID) {
            if (ouID === '')
              setOuID(unit.ou_id);
            filteredUsers.push(user);
          }
        })
      })
      return filteredUsers;
    }
  }

  const addUser = async () => {
    if (newUserEmail !== '') {
      const email = newUserEmail;
      const response = await fetch(`users/add/division`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify({
          email: email,
          ou_id: ouID,
          division_id: divisionID
        })
      })
      const feedback = await response.json();
      handleResponse(feedback);
    } else {
      const feedback = {message: 'You need to enter a email before adding.'}
      handleResponse(feedback);
    }
  }

  const removeUser = async (item) => {
    if (item) {
      const email = item.email;
      const response = await fetch(`users/remove/division`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify({
          email: email,
          ou_id: ouID,
          division_id: divisionID
        })
      })
      const feedback = await response.json();
      handleResponse(feedback);
    } else {
      const feedback = {message: 'You need to select a user.'}
      handleResponse(feedback);
    }
  }

  const updateUser = async (item) => {
    if (updateEmail !== '' || updatePassword !== '' || updateFirstname !== '' || updateLastname !== '') {
      const id = item._id;
      const email = item.email;
      const password = item.password;
      const firstname = item.firstname;
      const lastname = item.lastname;

      const response = await fetch(`users/update/details`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify({
          id: id,
          email: email,
          password: password,
          firstname: firstname,
          lastname: lastname,
          newEmail: updateEmail,
          newPassword: updatePassword,
          newFirstname: updateFirstname,
          newLastname: updateLastname,
        })
      })
      const feedback = await response.json();
      handleResponse(feedback);
    } else {
      const feedback = {message: 'You need to fill at least one field before updating.'}
      handleResponse(feedback);
    }
  }

  const updateUserRole = async (item) => {
    if (item) {
      const id = item._id;
      const role = item.role;

      const response = await fetch(`users/update/role`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify({
          id: id,
          role: role,
          newRole: updateRole
        })
      })
      const feedback = await response.json();
      handleResponse(feedback);
    } else {
      const feedback = {message: 'You need to select a user.'}
      handleResponse(feedback);
    }
  }

  const filteredUsers = filterUsers();

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            {all ? null : (
              <CCardHeader>
                <CForm action="" method="POST">
                  <CFormGroup row>
                    <CCol sm="6">
                      <CInput size="sm" type="email" id="new-user-email" name="new-user-email"
                              className="input-sm input-field"
                              placeholder="New user email"
                              onChange={onFieldChange}/>
                      {/*<CInputGroup className="input-sm input-field">*/}
                      {/*  <CSelect size="sm" custom name="new-role" id="new-role" onChange={onFieldChange}>*/}
                      {/*    <option value="user">Role</option>*/}
                      {/*    <option value="user">User</option>*/}
                      {/*    <option value="manager">Manager</option>*/}
                      {/*    <option value="admin">Admin</option>*/}
                      {/*  </CSelect>*/}
                      {/*</CInputGroup>*/}
                    </CCol>
                  </CFormGroup>
                </CForm>
                {(adminAccess ?
                    <CButton
                      size="sm"
                      color="success"
                      onClick={() => {
                        addUser();
                        setModal(!modal);
                      }}
                    >Add user</CButton> :
                    <CButton size="sm" color="success" disabled>Add user</CButton>
                )}
              </CCardHeader>
            )}
            <CCardBody>
              <CDataTable
                items={filteredUsers}
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
                                <CCol sm="5">
                                  <CInput size="sm" type="text" name="update-email" className="input-sm input-field"
                                          placeholder="Update email"
                                          onChange={onFieldChange}/>
                                  <CInput size="sm" type="text" name="update-password" className="input-sm input-field"
                                          placeholder="Update password"
                                          onChange={onFieldChange}/>
                                  <CInput size="sm" type="text" name="update-firstname"
                                          className="input-sm input-field"
                                          placeholder="Update first name" onChange={onFieldChange}/>
                                  <CInput size="sm" type="text" name="update-lastname" className="input-sm input-field"
                                          placeholder="Update last name"
                                          onChange={onFieldChange}/>
                                </CCol>
                                {all ?
                                  <CCol sm="4">
                                    <CInputGroup className="input-sm input-field">
                                      <CSelect size="sm" custom name="update-role" id="update-role" onChange={onFieldChange}>
                                        <option value="user">Role</option>
                                        <option value="user">User</option>
                                        <option value="manager">Manager</option>
                                        <option value="admin">Admin</option>
                                      </CSelect>
                                    </CInputGroup>
                                  </CCol>
                                  : null
                                }
                              </CFormGroup>
                            </CForm>
                            {adminAccess ?
                              <CButton
                                size="sm"
                                color="warning"
                                onClick={() => {
                                  updateUser(item);
                                  setModal(!modal);
                                }}
                              >Edit</CButton> :
                              <CButton size="sm" color="warning" disabled>Edit</CButton>
                            }
                            {all ?
                              (adminAccess ?
                                  <CButton
                                    size="sm"
                                    color="warning"
                                    className="ml-1"
                                    onClick={() => {
                                      updateUserRole(item);
                                      setModal(!modal);
                                    }}>
                                    Update Role
                                  </CButton>
                                  :
                                  <CButton
                                    size="sm"
                                    color="warning"
                                    className="ml-1"
                                    disabled>
                                    Update Role
                                  </CButton>
                              ) :
                              <CButton
                                size="sm"
                                color="danger"
                                className="ml-1"
                                onClick={() => {
                                  removeUser(item);
                                  setModal(!modal);
                                }}>
                                Remove
                              </CButton>
                            }
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

export default UsersTable;
