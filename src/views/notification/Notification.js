import React from 'react';
import {
  CButton,
  CCardBody,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from "@coreui/react";

const Notification = ({modal, setModal, notification, setNotification, hrefCondition, hrefLink}) => {
  return (
    <>
      <CModal show={modal} onClose={() => {
        setModal(false)
      }}>
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
            onClick={() => {setModal(false); setNotification('');}}
            href={hrefCondition ? hrefLink : "#"}
          >Ok</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Notification;
