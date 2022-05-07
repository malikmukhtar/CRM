import { useState } from 'react'
import {
    Modal, ModalBody, ModalHeader, Button, Row, Col, Card, CardBody, CardHeader, Nav, NavLink, NavItem, TabContent,
    TabPane, Input, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { TOKEN_COOKIE } from '../../../services/constants';
import SSRStorage from '../../../services/storage';
import { httpRequest } from '../../../services/utilities';
import classnames from "classnames";

function PriceModal({ planId, modal_backdrop, setmodal_backdrop }) {
    const [activeTab, setactiveTab] = useState(1);
    const [activeArrowTab, setactiveArrowTab] = useState(4);
    const [activeVerticalTab, setactiveVerticalTab] = useState(7);
    const [progressbarvalue, setprogressbarvalue] = useState(0);
    const [passedSteps, setPassedSteps] = useState([1]);
    const [passedarrowSteps, setPassedarrowSteps] = useState([1]);
    const [passedverticalSteps, setPassedverticalSteps] = useState([1]);

    function toggleVerticalTab(tab) {
        if (activeVerticalTab !== tab) {
            var modifiedSteps = [...passedverticalSteps, tab];

            if (tab >= 7 && tab <= 11) {
                setactiveVerticalTab(tab);
                setPassedverticalSteps(modifiedSteps);
            }
        }
    }
    // const [modal_backdrop, setmodal_backdrop] = useState(visible);

    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
    }

    const makePayment = async () => {
        const radioBtn = document.querySelectorAll('input[type="radio"]');
        const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);
        // const userid = user.data.id;
        const date = new Date().toISOString();
        const urlOne = 'payment/paystack';
        const urlTwo = 'payment/paypal';
        const url = radioBtn[0].checked === true ? urlOne : urlTwo;
        const data = {
            item: 'three bit',
            planId,
            date,
            description: 'testing out',
            userId: user.data.id
        };
        console.log(url, data);

        try {
            console.log(data);
            const rs = await httpRequest(url, 'POST', data);
            window.location.href = rs.link
            console.log(rs) 
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Modal
                isOpen={modal_backdrop}
                toggle={() => {
                    tog_backdrop();
                }}
                size='lg'
                backdrop={'static'}
                id="staticBackdrop"
                centered
            >
                <Button type="button" className="btn-close pointer p-2 fs-5"
                    onClick={() => {
                        setmodal_backdrop(false);
                    }} aria-label="Close">
                    
                    </Button>
                <ModalBody className="">
                    <Row>
                        <Col xl={12}>

                            <form className="vertical-navs-step">
                                <Row>
                                    <Col lg={3}>
                                        <Nav
                                            className="flex-column custom-nav nav-pills"
                                        >
                                            <NavItem>
                                                <NavLink
                                                    href="#"
                                                    className={
                                                        (classnames({
                                                            active: activeVerticalTab === 7,
                                                            done: (activeVerticalTab <= 11 && activeVerticalTab > 7)
                                                        }))
                                                    }
                                                    onClick={() => {
                                                        toggleVerticalTab(7);
                                                    }}
                                                >
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i>
                                                        Step 1
                                                    </span>
                                                    Billing Info
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    href="#"
                                                    className={
                                                        (classnames({
                                                            active: activeVerticalTab === 8,
                                                            done: (activeVerticalTab <= 11 && activeVerticalTab >= 8)
                                                        }))
                                                    }
                                                    onClick={() => {
                                                        toggleVerticalTab(8);
                                                    }}
                                                >
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i>
                                                        Step 2
                                                    </span>
                                                    Address
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({
                                                        active: activeVerticalTab === 9,
                                                        done: (activeVerticalTab <= 11 && activeVerticalTab >= 9)
                                                    })}
                                                    onClick={() => {
                                                        toggleVerticalTab(9);
                                                    }}
                                                >
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i>
                                                        Step 3
                                                    </span>
                                                    Payment
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({
                                                        active: activeVerticalTab === 10,
                                                        done: (activeVerticalTab <= 11 && activeVerticalTab >= 10)
                                                    })}
                                                    onClick={() => {
                                                        toggleVerticalTab(10);
                                                    }}
                                                >
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i>
                                                        Step 4
                                                    </span>
                                                    Finish
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col lg={9}>
                                        <div className="px-lg-4">
                                            <TabContent activeTab={activeVerticalTab}>
                                                <TabPane tabId={7}>
                                                    <div>
                                                        <h5>Billing Info</h5>
                                                        <p className="text-muted">
                                                            Fill all information below
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Row className="g-3">
                                                            <Col sm={6}>
                                                                <Label
                                                                    htmlFor="firstName"
                                                                    className="form-label"
                                                                >
                                                                    First name
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="firstName"
                                                                    placeholder="Enter First Name"
                                                                    defaultValue=""
                                                                />
                                                            </Col>

                                                            <Col sm={6}>
                                                                <Label
                                                                    htmlFor="lastName"
                                                                    className="form-label"
                                                                >
                                                                    Last name
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="lastName"
                                                                    placeholder="Enter Last Name"
                                                                    defaultValue=""
                                                                />
                                                            </Col>

                                                            <Col xs={12}>
                                                                <Label
                                                                    htmlFor="username"
                                                                    className="form-label"
                                                                >
                                                                    Username
                                                                </Label>
                                                                <div className="input-group">
                                                                    <span className="input-group-text">
                                                                        @
                                                                    </span>
                                                                    <Input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="username"
                                                                        placeholder="Username"
                                                                    />
                                                                </div>
                                                            </Col>

                                                            <Col xs={12}>
                                                                <Label
                                                                    htmlFor="email"
                                                                    className="form-label"
                                                                >
                                                                    Email{" "}
                                                                    <span className="text-muted">
                                                                        (Optional)
                                                                    </span>
                                                                </Label>
                                                                <Input
                                                                    type="email"
                                                                    className="form-control"
                                                                    id="email"
                                                                    placeholder="Enter Email"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </div>

                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-success btn-label right ms-auto nexttab nexttab"
                                                            onClick={() => {
                                                                toggleVerticalTab(activeVerticalTab + 1);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                            Go to Shipping
                                                        </button>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={8}>
                                                    <div>
                                                        <h5>Shipping Address</h5>
                                                        <p className="text-muted">
                                                            Fill all information below
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Row className="g-3">
                                                            <Col xs={12}>
                                                                <Label
                                                                    htmlFor="address"
                                                                    className="form-label"
                                                                >
                                                                    Address
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="address"
                                                                    placeholder="1234 Main St"
                                                                />
                                                            </Col>

                                                            <Col xs={12}>
                                                                <Label
                                                                    htmlFor="address2"
                                                                    className="form-label"
                                                                >
                                                                    Address 2{" "}
                                                                    <span className="text-muted">
                                                                        (Optional)
                                                                    </span>
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="address2"
                                                                    placeholder="Apartment or suite"
                                                                />
                                                            </Col>

                                                            <Col md={5}>
                                                                <Label
                                                                    htmlFor="country"
                                                                    className="form-label"
                                                                >
                                                                    Country
                                                                </Label>
                                                                <select
                                                                    className="form-select"
                                                                    id="country"
                                                                >
                                                                    <option defaultValue="">Choose...</option>
                                                                    <option>United States</option>
                                                                </select>
                                                            </Col>

                                                            <Col md={4}>
                                                                <Label
                                                                    htmlFor="state"
                                                                    className="form-label"
                                                                >
                                                                    State
                                                                </Label>
                                                                <select className="form-select" id="state">
                                                                    <option defaultValue="">Choose...</option>
                                                                    <option>California</option>
                                                                </select>
                                                            </Col>

                                                            <Col md={3}>
                                                                <Label htmlFor="zip" className="form-label">
                                                                    Zip
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="zip"
                                                                    placeholder=""
                                                                />
                                                            </Col>
                                                        </Row>

                                                        <hr className="my-4 text-muted" />

                                                        <div className="form-check mb-2">
                                                            <Input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="same-address"
                                                            />
                                                            <Label
                                                                className="form-check-label"
                                                                htmlFor="same-address"
                                                            >
                                                                Shipping address is the same as my billing
                                                                address
                                                            </Label>
                                                        </div>

                                                        <div className="form-check">
                                                            <Input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="save-info"
                                                            />
                                                            <Label
                                                                className="form-check-label"
                                                                htmlFor="save-info"
                                                            >
                                                                Save this information for next time
                                                            </Label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-light btn-label previestab"
                                                            onClick={() => {
                                                                toggleVerticalTab(activeVerticalTab - 1);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                                                            Back to Billing Info
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-success btn-label right ms-auto nexttab"
                                                            onClick={() => {
                                                                toggleVerticalTab(activeVerticalTab + 1);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                            Go to Payment
                                                        </button>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={9}>
                                                    <div>
                                                        <h5>Payment</h5>
                                                        <p className="text-muted">
                                                            Fill all information below
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <div className="my-3">
                                                            <div className="form-check form-check-inline">
                                                                <Input
                                                                    id="debit"
                                                                    name="paymentMethod"
                                                                    type="radio"
                                                                    className="form-check-input"
                                                                    required
                                                                />
                                                                <Label
                                                                    className="form-check-label"
                                                                    htmlFor="debit"
                                                                >
                                                                    paystack
                                                                </Label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <Input
                                                                    id="paypal"
                                                                    name="paymentMethod"
                                                                    type="radio"
                                                                    className="form-check-input"
                                                                    required
                                                                />
                                                                <Label
                                                                    className="form-check-label"
                                                                    htmlFor="paypal"
                                                                >
                                                                    PayPal
                                                                </Label>
                                                            </div>
                                                        </div>

                                                        <Row className="gy-3">
                                                            <Col md={12}>
                                                                <Label
                                                                    htmlFor="cc-name"
                                                                    className="form-label"
                                                                >
                                                                    Name on card
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="cc-name"
                                                                    placeholder=""
                                                                    required
                                                                />
                                                                <small className="text-muted">
                                                                    Full name as displayed on card
                                                                </small>
                                                                <div className="invalid-feedback">
                                                                    Name on card is required
                                                                </div>
                                                            </Col>

                                                            <Col md={6}>
                                                                <Label
                                                                    htmlFor="cc-number"
                                                                    className="form-label"
                                                                >
                                                                    Credit card number
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="cc-number"
                                                                    placeholder=""
                                                                    required
                                                                />
                                                                <div className="invalid-feedback">
                                                                    Credit card number is required
                                                                </div>
                                                            </Col>

                                                            <Col md={3}>
                                                                <Label
                                                                    htmlFor="cc-expiration"
                                                                    className="form-label"
                                                                >
                                                                    Expiration
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="cc-expiration"
                                                                    placeholder=""
                                                                    required
                                                                />
                                                                <div className="invalid-feedback">
                                                                    Expiration date required
                                                                </div>
                                                            </Col>

                                                            <Col md={3}>
                                                                <Label
                                                                    htmlFor="cc-cvv"
                                                                    className="form-label"
                                                                >
                                                                    CVV
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="cc-cvv"
                                                                    placeholder=""
                                                                    required
                                                                />
                                                                <div className="invalid-feedback">
                                                                    Security code required
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>

                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-light btn-label previestab"
                                                            onClick={() => {
                                                                toggleVerticalTab(activeVerticalTab - 1);
                                                            }}
                                                        >
                                                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                                                            Back to Shipping Info
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-success btn-label right ms-auto nexttab"
                                                            onClick={() => {
                                                                toggleVerticalTab(activeVerticalTab + 1);
                                                                makePayment()
                                                            }}
                                                        >
                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>{" "}
                                                            Order Complete
                                                        </button>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={10}>
                                                    <div className="text-center pt-4 pb-2">
                                                        <div className="mb-4">
                                                            <lord-icon
                                                                src="https://cdn.lordicon.com/lupuorrc.json"
                                                                trigger="loop"
                                                                colors="primary:#0ab39c,secondary:#405189"
                                                                style={{ width: "120px", height: "120px" }}
                                                            ></lord-icon>
                                                        </div>
                                                        <h5>Your Order is Completed !</h5>
                                                        <p className="text-muted">
                                                            You Will be redirected to complete your payment.
                                                        </p>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    )
}

export default PriceModal