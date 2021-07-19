import React, {lazy, useEffect, useRef, useState} from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CWidgetBrand,
  CWidgetDropdown,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CWidgetIcon,
  CLink,
  CFade
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
import ChartBarSimple from "../charts/ChartBarSimple";
import routes from "../../routes";
import {Route} from "react-router-dom";

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [ous, setOus] = useState([]);

  useEffect(() => {
    console.log(`use effect triggered`)

    const mountFetch = async () => {
      console.log(`got into mountFetch`)
      await getData();
      console.log(`finished mounting async function`)
      console.log(ous)
    }
    mountFetch();
  }, [])

  const getData = async () => {
    await getOus();
  }

  // Function used to retrieve the information of the ou collection
  const getOus = async () => {
    // const response = await fetch('/ous/find/all');
    // const data = response.json();
    // const data = ouData;

    // setOus([...ous, data]);

    // data.map(obj => {
    //   setOus(pre => [...pre, obj]);
    //   // setOus([...ous, obj]);
    // });

    data.map(obj => {
      setOus(ous.push(obj));
    });
  }

  return (
    <>
      <CRow>
        {/*<h1>Testing ou display:</h1>*/}

        {/*{ous.map((ou) => {*/}
        {/*  return (*/}
        {/*    <p>{ou.name}</p>*/}
        {/*  )*/}
        {/*})}*/}

        {/*<p>{ous.name}</p>*/}

        {/*{ous.forEach((ou) => {*/}
        {/*  return (*/}
        {/*    <p>{ou.name}</p>*/}
        {/*  )*/}
        {/*})}*/}

        <CCol xs="12" sm="6" lg="4">
          <CWidgetIcon
            text="Organisational Units"
            header={ous}
            color="warning"
            iconPadding={false}

            footerSlot={
              <CRow className="align-items-center">
                <CCol col="6" sm="4" md="2" xl className="mt-1 mb-3 mb-xl-0">
                  <CButton block color="primary">Primary</CButton>
                </CCol>
                <CCol col="6" sm="4" md="2" xl className="mt-1 mb-3 mb-xl-0">
                  <CButton block color="secondary">Secondary</CButton>
                </CCol>
                <CCol col="6" sm="4" md="2" xl className="mt-1 mb-3 mb-xl-0">
                  <CButton block color="success">Success</CButton>
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
            header={ous}
            color="warning"
            iconPadding={false}

            footerSlot={
              <CRow className="align-items-center">
                <CCol col="6" sm="4" md="2" xl className="mt-1 mb-3 mb-xl-0">
                  <CButton block color="primary">Primary</CButton>
                </CCol>
                <CCol col="6" sm="4" md="2" xl className="mt-1 mb-3 mb-xl-0">
                  <CButton block color="secondary">Secondary</CButton>
                </CCol>
                <CCol col="6" sm="4" md="2" xl className="mt-1 mb-3 mb-xl-0">
                  <CButton block color="success">Success</CButton>
                </CCol>
              </CRow>
            }
          >
            <CIcon width={24} name="cil-briefcase" className="mx-5"/>
          </CWidgetIcon>
        </CCol>

      </CRow>
    </>
  )
}

export default Dashboard
