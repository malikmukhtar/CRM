import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button, Card, CardBody, CardHeader, Col, CardTitle, CardText, Container, ListGroup, UncontrolledTooltip, Modal, ModalBody, ModalFooter, Toast, ModalHeader, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import List from 'list.js';
import { request } from '../../services/utilities';
import { ToastContainer, toast } from 'react-toastify';
import { TOKEN_COOKIE } from '../../services/constants';
import GroupMessage from './GroupMessage'
import { LoaderGrow } from '../AdvanceUi/Loader/loader';
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import {  CardTitle, CardText } from 'reactstrap'

const MySwal = withReactContent(Swal)

const ListTables = (props) => {
    const [checkArr, setCheckArr] = useState(null);
    const refChecked = useRef();
    const [groups, setGroups] = useState([]);
    const [error, setError] = useState('')
    const [idGroup, setIdGroup] = useState(null)
    const [note, setNote] = useState('null')

    const [loading, setLoading] = useState(false)
    const [is_add, setIs_add] = useState(false);
    const [is_edit, setIs_edit] = useState(false)

    const [modal_list, setmodal_list] = useState(false);

    function tog_list() {
        setIs_add(true)
        setmodal_list(!modal_list);
    }

    const [modal_delete, setmodal_delete] = useState(false);
    function tog_delete() {
        setmodal_delete(!modal_delete);
    }
    // add contact to group
    const [modal_group, setmodal_group] = useState(false);
    function tog_group() {
        setmodal_group(!modal_delete);
    }

    const handleSuccessRemove = () => {
        return MySwal.fire({
            title: 'Good job!',
            text: 'Contact removed successfully!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
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

    const removeContactFromGroup = async () => {
        const data = { contactIds: checkArr, groupId: parseInt(idGroup) }
        console.log(data)
        if (idGroup === null) {
            setError('Pls Select a Group')
            return
        }
        setError('')

        try {
            const url = `group/remove-contacts`;
            const rs = await request(url, 'PATCH', true, data);
            handleSuccessRemove();
            setmodal_group(false)
        } catch (error) {
            handleError()
        }
    }

    const makeChecked = (id) => {
        let checkAll = document.getElementById('checkAll');
        let checkOne = document.querySelectorAll('.checkOne');
        let rowId = document.querySelectorAll(".rowId");
        let id_checked = []

        let arr = []
        checkOne.forEach((e, i) => {
            if (checkAll.checked === true) {
                e.checked = true;
                refChecked.current.style.display = 'block';
            }
            if (e.checked == true) {
                let itemx = id_checked.find(x => x == rowId[i].innerText);

                if (!itemx) {
                    id_checked.unshift(rowId[i].innerText)
                    console.log(checkArr, id_checked, 'add');
                }
            }
            else {
                let itemx = id_checked.find(x => x == rowId[i].innerText);

                if (itemx) {
                    console.log(i, rowId[i].innerText);
                    id_checked.splice(i, 1);
                    console.log(checkArr, id_checked, 'remove')
                }

            }

            let x = e.checked.toString()
            arr.push(x)
            if (arr.includes('true')) {
                refChecked.current.style.display = 'block'
            } else {
                refChecked.current.style.display = 'none'
            }
        })
        setCheckArr(id_checked)
    }

    return (
        <React.Fragment>
            <Col lg={12}>
                <Card>
                    <CardHeader className='w-100'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <h4 className="card-title mb-0">Add, Edit & Remove</h4>
                            </div>
                            <div>{loading === true ? <LoaderGrow /> : ''}</div>
                            <div className="order-3 order-sm-2" >
                                <div className="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                    <div ref={refChecked} style={{ display: 'none' }}>
                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" id="Tooltip1">
                                            <i className="ri-inbox-archive-fill align-bottom"></i>
                                        </button>
                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" id="Tooltip2">
                                            <i className="ri-error-warning-fill align-bottom" onClick={() => tog_group()}></i>
                                        </button>
                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" id="Tooltip3">
                                            <i className="ri-delete-bin-5-fill align-bottom"></i>
                                        </button>
                                    </div>
                                    <div className="vr align-self-center mx-2"></div>
                                    <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16"
                                        onClick={() => tog_list()}

                                        id="Tooltip5">
                                        <i className="ri-price-tag-3-fill align-bottom"></i>
                                    </button>
                                    <UncontrolledTooltip placement="top" target="Tooltip1"> Archive </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="top" target="Tooltip2"> Remove Contact To Group </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="top" target="Tooltip3"> Trash </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="top" target="Tooltip5"> Create Contact </UncontrolledTooltip>
                                </div>
                            </div>
                        </div>
                    </CardHeader>

                    <CardBody>
                        <div id="customerList">
                            <Row className="g-4 mb-3">
                                <Col className="col-sm-auto">
                                </Col>
                                <Col className="col-sm">
                                    <div className="d-flex justify-content-sm-end">
                                        <div className="search-box ms-2">
                                            <input type="text" className="form-control search" placeholder="Search..." />
                                            <i className="ri-search-line search-icon"></i>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="table-responsive table-card mt-3 mb-1">
                                <table className="table align-middle table-nowrap" id="customerTable">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col" style={{ width: "50px" }}>
                                                <div className="form-check">
                                                    <input className="form-check-input" onClick={() => makeChecked()} type="checkbox" id="checkAll" value="option" />
                                                </div>
                                            </th>
                                            <th className="sort" data-sort="customer_name">Customer</th>
                                            <th className="sort" data-sort="email">Email</th>
                                            <th className="sort" data-sort="phone">Phone</th>
                                            <th className="sort" data-sort="status">Status</th>
                                            {/* <th className="sort" data-sort="action">Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody className="list form-check-all">
                                        {props.contacts.map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <input className="checkOne form-check-input" onClick={() => makeChecked(e.id)} type="checkbox" />
                                                        </div>
                                                    </th>
                                                    <td className="customer_name">{e.contactName}</td>
                                                    <td className="email">{e.email}</td>
                                                    <td className="rowId phone">{e.phone}</td>
                                                    <td className="status"><span className="badge badge-soft-success text-uppercase">Subscribed</span></td>
                                                    {/* <td>
                                                        <div className="hstack gap-3 flex-wrap">
                                                            <Link to="#" className="link-success fs-15"><i className="ri-edit-2-line" onClick={() => editContact(i)}></i></Link>
                                                            <Link to="#" className="link-danger fs-15" onClick={() => handleConfirmText(e.id)}><i className="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td> */}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div className="noresult" style={{ display: "none" }}>
                                    <div className="text-center">
                                        <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                                            colors="primary:#121331,secondary:#08a88a" style={{ width: "75px", height: "75px" }}>
                                        </lord-icon>
                                        <h5 className="mt-2">Sorry! No Result Found</h5>
                                        <p className="text-muted mb-0">We've searched more than 150+ Orders We did not find any
                                            orders for you search.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
                                <div className="pagination-wrap hstack gap-2">
                                    <Link className="page-item pagination-prev disabled" to="#">
                                        Previous
                                    </Link>
                                    <ul className="pagination listjs-pagination mb-0"></ul>
                                    <Link className="page-item pagination-next" to="#">
                                        Next
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>

            {/* Add Modal */}
            <Modal isOpen={modal_group} toggle={() => { tog_group(); }} centered >
                <ModalHeader className="bg-light p-3">
                    Remove Contact To Group
                    <Button type="button" onClick={() => { setmodal_group(false); }} className="btn-close" aria-label="Close" >
                    </Button>
                </ModalHeader>
                <form>
                    <ModalBody>
                        <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                            <label htmlFor="id-field" className="form-label">ID</label>
                            <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                        </div>
                        <div>
                            <p className='text-danger'>{error}</p>
                            <label htmlFor="status-field" className="form-label">Select Group</label>
                            <select className="form-control" data-trigger name="status-field" id="status-field"
                                value={idGroup} onChange={(e) => setIdGroup(e.target.value)}>
                                <option value=''>select</option>
                                {groups.map(e => {
                                    return (
                                        <option key={e.id} value={e.id}>{e.groupName}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-success" id="add-btn" onClick={() => removeContactFromGroup()}>Remove From Group</button>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>
            <GroupMessage toggle={props.toggle} modal={props.modal} setModal={props.setModal} checkArr={checkArr} groupName={props.groupName} />

        </React.Fragment >
    );
};

export default ListTables;
