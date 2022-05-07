import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';
import MetaTags from 'react-meta-tags';
import { httpRequest } from '../../../services/utilities';
import AuthSlider from '../authCarousel';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { LoaderGrow } from '../../AdvanceUi/Loader/loader';
// import {  CardTitle, CardText } from 'reactstrap'

const MySwal = withReactContent(Swal)
const CoverSignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

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

    const createAdmin = async () => {
        const data = { email, password, userName: username }
        if (email === '' || password === '' || username === '') {
            return setError('fill your details')
        }
        try {
            setLoading(true)
            let url = 'accounts/register';
            const rs = await httpRequest(url, 'POST', data);
            console.log(rs, 'successful');
            setLoading(false)
            setError('successful')
            handleSuccess();
            history.push('auth-signin-cover');

        } catch (err) {
            setLoading(false)
            handleError();
            console.log(err, 'err')
            return setError('something went wrong')

        }
    }

    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <MetaTags>
                        <title>Cover SignUp | Velzon - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden m-0">
                                    <Row className="justify-content-center g-0">
                                        <AuthSlider />
                                        <>{loading === true ? <LoaderGrow /> : ''}</>
                                        <div className="col-lg-6">
                                            <div className="p-lg-5 p-4">
                                                <div>
                                                    <h5 className="text-primary">Register Account</h5>
                                                    <p className="text-muted">Get your Free Velzon account now.</p>
                                                </div>

                                                <div className="mt-4">
                                                    <form className="needs-validation" noValidate action="index">

                                                        <div className="mb-3">
                                                            <label htmlFor="useremail" className="form-label">Email  <span className="text-danger">*{error}</span></label>
                                                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="useremail" placeholder="Enter email address" required />
                                                            <div className="invalid-feedback">
                                                                Please enter email
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Enter username" required />
                                                            <div className="invalid-feedback">
                                                                Please enter username
                                                            </div>
                                                        </div>

                                                        <div className="mb-2">
                                                            <label htmlFor="userpassword" className="form-label">Password <span className="text-danger">*{error}</span></label>
                                                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="userpassword" placeholder="Enter password" required />
                                                            <div className="invalid-feedback">
                                                                Please enter password
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                                                        </div>

                                                        <div className="mt-4">
                                                            <button onClick={() => createAdmin()} className="btn btn-success w-100" type="button">Sign Up</button>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <div className="signin-other-title">
                                                                <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                                            </div>

                                                            <div>
                                                                <button type="button" className="btn btn-primary btn-icon waves-effect waves-light me-1"><i className="ri-facebook-fill fs-16"></i></button>
                                                                <button type="button" className="btn btn-danger btn-icon waves-effect waves-light me-1"><i className="ri-google-fill fs-16"></i></button>
                                                                <button type="button" className="btn btn-dark btn-icon waves-effect waves-light me-1"><i className="ri-github-fill fs-16"></i></button>
                                                                <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16"></i></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p className="mb-0">Already have an account ? <Link to="/auth-signin-cover" className="fw-semibold text-primary text-decoration-underline"> Signin</Link> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card>
                            </Col>

                        </Row>
                    </Container>
                </div>

                <footer className="footer">
                    <Container>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <p className="mb-0">&copy; <script>document.write(new Date().getFullYear())</script> Velzon. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default CoverSignUp;