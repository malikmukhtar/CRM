import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { httpRequest } from '../../../services/utilities';
import { Card, Col, Container, Input, Label, Row, Button } from 'reactstrap';
import MetaTags from 'react-meta-tags';
import AuthSlider from '../authCarousel';
import SSRStorage from '../../../services/storage';
import { TOKEN_COOKIE } from '../../../services/constants';
// import { facebook, google } from "../../../";
import { google, facebook } from '../../../config';
import { GoogleLogin } from "react-google-login";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { LoaderGrow } from '../../AdvanceUi/Loader/loader';

const storage = new SSRStorage();
const MySwal = withReactContent(Swal)

const CoverSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const handleSuccess = () => {
        return MySwal.fire({
            title: 'Good job!',
            text: 'successfully Register!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const handleError = () => {
        return MySwal.fire({
            title: 'Opps!',
            text: ' Something went wrong!',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
        })
    }
    const loginAdmin = async () => {
        const data = { email, password }
        console.log(data)
        if (email === '' || password === '') {
            return setError('fill your details')
        }
        try {
            setLoading(true);
            let url = 'accounts/login';
            const rs = await httpRequest(url, 'POST', data);
            console.log(rs, 'successful');
            storage.setItem(TOKEN_COOKIE, rs);
            const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);
            console.log(user, rs, 'token_cookie')
            setLoading(false)
            if (rs.status === 'success') {
                setError('successful');
                handleSuccess();
                return history.push('/dashboard')

            }

        } catch (err) {
            setLoading(false);
            handleError();
            console.log(err, 'err')
            if (err.message) {
                return setError('Invalid email or password!!')
            }
        }
    }

    //handleGoogleLoginResponse
    const googleResponse = response => {
        loginAdmin(response, "google");
    };

    //handleTwitterLoginResponse
    // const twitterResponse = e => {}

    //handleFacebookLoginResponse
    const facebookResponse = response => {
        loginAdmin(response, "facebook");
    };
    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>

                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <MetaTags>
                        <title>Cover SignIn | Velzon - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden">
                                    <Row className="g-0">
                                        <AuthSlider />
                                        <>{loading === true ? <LoaderGrow /> : ''}</>
                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4">
                                                <div>
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p className="text-muted">Sign in to continue to Velzon.</p>
                                                </div>

                                                <div className="mt-4">
                                                    <form action="/">

                                                        <div className="mb-3">
                                                            <Label htmlFor="email" className="form-label" >Email</Label>
                                                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter email" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="float-end">
                                                                <Link to="/auth-pass-reset-cover" className="text-muted">Forgot password?</Link>
                                                            </div>
                                                            <Label className="form-label" htmlFor="password-input">Password</Label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <Input type="password" className="form-control pe-5" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" id="password-input" />
                                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                            </div>
                                                        </div>
                                                        <span className="text-danger" style={{ textAlign: 'left' }}>{error}</span>
                                                        <div className="form-check">
                                                            {/* <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" /> */}
                                                            {/* <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label> */}
                                                        </div>

                                                        <div className="mt-4">
                                                            <Button color="success" onClick={() => loginAdmin()} className="w-100" type="button">Sign In</Button>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <div className="signin-other-title">
                                                                <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                            </div>
                                                            <div>
                                                                <FacebookLogin
                                                                    appId={facebook.APP_ID}
                                                                    autoLoad={false}
                                                                    callback={facebookResponse}
                                                                    render={renderProps => (
                                                                        <Button color="primary"
                                                                            className="btn-icon me-1"
                                                                            onClick={renderProps.onClick}
                                                                        >
                                                                            <i className="ri-facebook-fill fs-16" />
                                                                        </Button>
                                                                    )}
                                                                />
                                                                <GoogleLogin
                                                                    clientId={
                                                                        google.CLIENT_ID ? google.CLIENT_ID : ""
                                                                    }
                                                                    render={renderProps => (
                                                                        <Button color="danger"
                                                                            to="#"
                                                                            className="btn-icon me-1"
                                                                            onClick={renderProps.onClick}
                                                                        >
                                                                            <i className="ri-google-fill fs-16" />
                                                                        </Button>
                                                                    )}
                                                                    onSuccess={googleResponse}
                                                                    onFailure={() => {

                                                                    }}
                                                                />
                                                                <Button color="dark" className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>{" "}
                                                                <Button color="info" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p className="mb-0">Don't have an account ? <Link to="/auth-signup-cover" className="fw-semibold text-primary text-decoration-underline"> Signup</Link> </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <footer className="footer">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center">
                                    <p className="mb-0">&copy; {new Date().getFullYear()} Velzon. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>

            </div>
        </React.Fragment>
    );
};

export default CoverSignIn;