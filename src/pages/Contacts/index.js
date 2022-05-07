import React from 'react';
import MetaTags from 'react-meta-tags';  // Added Meta Tag npm Package
import { Row, Container } from "reactstrap";
import BreadCrumb from '../../Components/Common/BreadCrumb';

import ListTables from './ListTables';
import Testing from './Testing';


const Contacts = () => {

    return (
        <>
            <div className="page-content" >
                <MetaTags>
                    <title>Contacts | CRM</title>
                </MetaTags>
                <Container fluid={true} >
                    <BreadCrumb title="Contacts" breadcrumbItem="Contacts" />

                    <Row>
                        <ListTables />
                        {/* <Testing/> */}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Contacts;