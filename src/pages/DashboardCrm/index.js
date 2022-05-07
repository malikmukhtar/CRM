import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import MetaTags from 'react-meta-tags';
// import IdleTimer from 'react-idle-timer'

import { useIdleTimer } from 'react-idle-timer'


import UpgradeAccountNotise from './UpgradeAccountNotise';
import RecentOrders from "./RecentOrders";
import Trading from './Trading'
import BalanceOverview from './BalanceOverview';
import ClosingDeals from './ClosingDeals';
import DealsStatus from './DealsStatus';
import DealType from './DealType';
import MyTasks from './MyTasks';
import SalesForecast from './SalesForecast';
import UpcomingActivities from './UpcomingActivities';
import Widgets from './Widgets';

const DashboardCrm = () => {
    const idleRef = useRef();

    const handleOnIdle = event => {
        console.log('user is idle', event)
        console.log('last active', getLastActiveTime())
    }

    const handleOnActive = event => {
        console.log('user is active', event)
        console.log('time remaining', getRemainingTime())
    }

    const handleOnAction = event => {
        console.log('user did something', event)
    }

    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 5 * 1000 ,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        // debounce: 500
    })
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <MetaTags>
                        <title>CRM | Velzon - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <BreadCrumb title="CRM" pageTitle="Dashboards" />
                    {/* <div><IdleTimer ref={idleRef} /></div> */}
                    <Row>
                        <Widgets />
                    </Row>
                    <Row>
                        <Col xxl={12}>
                            <UpgradeAccountNotise />
                            {/* <Widget /> */}
                        </Col>
                        {/* <LiveUsers /> */}
                    </Row>
                    <Row>
                        {/* <StoreVisits /> */}
                        <RecentOrders />
                        <Trading />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardCrm;