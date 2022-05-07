import React, { useEffect, useState } from 'react';
import MetaTags from "react-meta-tags";
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import classnames from "classnames";
import { request } from '../../../services/utilities';

import PriceModal from './PriceModal';
import { LoaderGrow } from '../../AdvanceUi/Loader/loader';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import {  CardTitle, CardText } from 'reactstrap'

const MySwal = withReactContent(Swal)
const Pricing = () => {
    const [plan, setPlan] = useState([]);
    const [planId, setPlanId] = useState(0);
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    const [modal_backdrop, setmodal_backdrop] = useState(false);
    const handleError = () => {
        return MySwal.fire({
            title: 'Opps!',
            text: ' Something went wrong!',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
        })
    }
    const showModal = (id) => {
        setPlanId(id)
        setmodal_backdrop(true)
        setShow(true);
        console.log('hi me mm', show);

    }

    // const pricing1 = [
    //     {
    //         id: 1,
    //         type: "Starter",
    //         rate: 19,
    //         description: "The perfect way to get started and get used to our tools.",
    //         projects: 3,
    //         Customers: 299,
    //         FTP: 5,
    //         supportClass: "danger",
    //         supportClassSymbol: "close",
    //         storageClass: "danger",
    //         storageClassSymbol: "close",
    //         domainClass: "danger",
    //         domainClassSymbol: "close",
    //         ribbon: false,
    //         planButtonClassname: "danger",
    //         btntxt: "Your Current Plan",
    //         btnstatus: " disabled ",
    //         rateYear: "$171",
    //         delrateYear: "$228"
    //     },
    //     {
    //         id: 2,
    //         type: "Professional",
    //         rate: 29,
    //         description: "Excellent for scalling teams to build culture. Special plan for professional business.",
    //         projects: 8,
    //         Customers: 499,
    //         FTP: 7,
    //         supportClass: "success",
    //         supportClassSymbol: "checkbox",
    //         storageClass: "danger",
    //         storageClassSymbol: "close",
    //         domainClass: "danger",
    //         domainClassSymbol: "close",
    //         ribbon: false,
    //         planButtonClassname: "info",
    //         btntxt: "Change Plan",
    //         rateYear: "261",
    //         delrateYear: "348"
    //     },
    //     {
    //         id: 3,
    //         type: "Enterprise",
    //         rate: 39,
    //         description: "This plan is for those who have a team alredy and running a large business.",
    //         projects: 15,
    //         Customers: "Unlimited",
    //         FTP: 12,
    //         supportClass: "success",
    //         supportClassSymbol: "checkbox",
    //         storageClass: "success",
    //         storageClassSymbol: "checkbox",
    //         domainClass: "danger",
    //         domainClassSymbol: "close",
    //         ribbon: true,
    //         planButtonClassname: "info",
    //         btntxt: "Change Plan",
    //         rateYear: "351",
    //         delrateYear: "468"
    //     },
    //     {
    //         id: 4,
    //         type: "Unlimited",
    //         rate: 49,
    //         description: "For most businesses that want to optimize web queries.",
    //         projects: "Unlimited",
    //         Customers: "Unlimited",
    //         FTP: "Unlimited ",
    //         supportClass: "success",
    //         supportClassSymbol: "checkbox",
    //         storageClass: "success",
    //         storageClassSymbol: "checkbox",
    //         domainClass: "success",
    //         domainClassSymbol: "checkbox",
    //         ribbon: false,
    //         planButtonClassname: "info",
    //         btntxt: "Change Plan",
    //         rateYear: "441",
    //         delrateYear: "588"
    //     },
    // ]

    const fetchPlan = async () => {
        try {
            setLoading(true)
            const url = 'plan/all';
            const rs = await request(url, 'GET', true);
            setPlan(rs);
            setLoading(false)
        } catch (err) {
            setLoading(false);
            handleError()
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPlan();
    }, [])
    //Tab 
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Pricing | Velzon - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    <BreadCrumb title="Pricing" pageTitle="Pages" />
                    <Row className="justify-content-center mt-4">
                        <Col lg={5}>
                            <div className="text-center mb-4">
                                <h4 className="fw-semibold fs-22">Plans & Pricing</h4>
                                <p className="text-muted mb-4 fs-15">Simple pricing. No hidden fees. Advanced features for you business.</p>

                                <div className="d-inline-flex">
                                    <Nav className="nav-pills arrow-navtabs plan-nav rounded mb-3 p-1" id="pills-tab" role="tablist">
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classnames({ active: activeTab === '1' }, 'fw-semibold')}
                                                onClick={() => { toggleTab('1'); }}
                                            >
                                                Monthly
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classnames({ active: activeTab === '2' }, 'fw-semibold')}
                                                onClick={() => { toggleTab('2'); }}
                                            >Annually <span className="badge bg-success">25% Off</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row >
                        {(plan || []).map((e, key) => (
                            <Col xxl={3} lg={6} key={key}>

                                <Card className="pricing-box ribbon-box right" >
                                    {e.ribbon === true ? <div className="ribbon-two ribbon-two-danger"><span>Popular</span></div> : ""}
                                    <CardBody className="bg-light m-2 p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="flex-grow-1">
                                                <h5 className="mb-0 fw-semibold">{e.name}</h5>
                                            </div>
                                            <div className="ms-auto">
                                                <TabContent activeTab={activeTab}>
                                                    <TabPane tabId="1">
                                                        <h2 className="month mb-0">${e.amount} <small className="fs-13 text-muted">/Month</small></h2>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <h2 className="annual mb-0"><small className="fs-16"><del>${e.delrateYear}</del></small> ${e.amount} <small className="fs-13 text-muted">/Year</small></h2>
                                                    </TabPane>
                                                </TabContent>
                                            </div>
                                        </div>

                                        <p className="text-muted">{e.description}</p>
                                        <ul className="list-unstyled vstack gap-3">
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>{e.projects}</b> Projects
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>{e.Customers}</b> Customers
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Scalable Bandwidth
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>{e.FTP}</b> FTP Login
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className={`flex-shrink-0 text-${e.supportClass} me-1`}>
                                                        <i className={`ri-${e.supportClassSymbol}-circle-fill fs-15 align-middle`}></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>24/7</b> Support
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className={`flex-shrink-0 text-${e.storageClass} me-1`}>
                                                        <i className={`ri-${e.storageClassSymbol}-circle-fill fs-15 align-middle`}></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>Unlimited</b> Storage
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className={`flex-shrink-0 text-${e.domainClass} me-1`}>
                                                        <i className={`ri-${e.domainClassSymbol}-circle-fill fs-15 align-middle`}></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Domain
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="mt-3 pt-2">
                                            <Link to="#" className={`btn bg-danger w-100`} onClick={() => showModal(e.id)}>click me</Link>
                                            {/* <Link to="#" className={`btn btn-${e.planButtonClassname} ${e.btnstatus} w-100`}>{e.btntxt}</Link> */}
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
            <>{loading === true ? <LoaderGrow /> : ''}</>
            <>{show === true ? <PriceModal planId={planId} modal_backdrop={modal_backdrop} setmodal_backdrop={setmodal_backdrop} /> : ' '}</>

        </React.Fragment>
    )
}

export default Pricing