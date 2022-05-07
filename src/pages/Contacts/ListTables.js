import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button, Card, CardBody, CardHeader, Col, CardTitle, CardText, Container, ListGroup, UncontrolledTooltip, Modal, ModalBody, ModalFooter, Toast, ModalHeader, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import List from 'list.js';
import { request } from '../../services/utilities';
import { ToastContainer, toast } from 'react-toastify';
import { TOKEN_COOKIE } from '../../services/constants';
import SSRStorage from '../../services/storage';
import { LoaderGrow } from '../AdvanceUi/Loader/loader';
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import GroupMessage from './GroupMessage';
// import {  CardTitle, CardText } from 'reactstrap'

const MySwal = withReactContent(Swal)

const ListTables = () => {
    const [show, setShow] = useState('none')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [contacts, setContacts] = useState([]);
    const [contactId, setContactId] = useState(null);
    const [check_number, setCheck_number] = useState('');

    const [checkArr, setCheckArr] = useState([]);
    const refChecked = useRef();
    const [groups, setGroups] = useState([]);

    const [error, setError] = useState('')
    const [idGroup, setIdGroup] = useState(null)
    const [note, setNote] = useState('null')
    const [modal, setModal] = useState(false);

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
    const handleSuccess = () => {
        return MySwal.fire({
            title: 'Good job!',
            text: 'Contact created successfully!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const handleSuccessAddd = () => {
        return MySwal.fire({
            title: 'Good job!',
            text: 'Contact added successfully!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        })
    }
    const handleSuccessUpdate = () => {
        return MySwal.fire({
            title: 'Good job!',
            text: note,
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        })
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
    const fetchTransaction = useCallback(async () => {
        try {
            setLoading(true);
            const url = `contact/all`;
            const rs = await request(url, 'GET', true);
            const rg = await request('group/all', 'GET', true);
            setContacts(rs);
            setGroups(rg)
            setLoading(false);
            // setMeta(meta);
        } catch (error) {
            setLoading(false);
            handleError();
        }
    }, [loading, contacts])

    const createContact = async () => {
        const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);

        const data = { email, phone, adminId: user.data.id, contactName: name }
        if (email === '') {
            setError('Pls fill the form');
            return
        }
        try {
            const url = `contact/create`;
            const rs = await request(url, 'POST', true, data);
            fetchTransaction();
            handleSuccess();
            setmodal_list(false)
        } catch (error) {
            handleError();
        }
    }
    const addContactToGroup = async () => {
        const data = { contactIds: checkArr, groupId: parseInt(idGroup) }
        console.log(data)
        if (idGroup === null) {
            setError('Pls Select a Group')
            return
        }
        setError('')

        try {
            const url = `group/add-contacts`;
            const rs = await request(url, 'PATCH', true, data);
            handleSuccessAddd();
            setmodal_group(false)
        } catch (error) {
            handleError()
        }
    }
    const editContact = (i) => {
        setIs_edit(true)
        const contact_item = contacts[i];
        setName(contact_item.contactName)
        setEmail(contact_item.email)
        setPhone(contact_item.phone)
        setContactId(contact_item.id)
        setmodal_list(true);
    }
    const updateContact = async () => {
        const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);

        const data = { email, phone, adminId: user.data.id, contactName: name }
        console.log(data)
        if (email === null) {
            setError('Pls fill the form')
            return
        }
        setError('')

        try {
            const url = `contact/update/${contactId}`;
            const rs = await request(url, 'PATCH', true, data);
            setNote('Contact Update successfully!');
            console.log(rs);
            fetchTransaction();
            setmodal_list(false);
            handleSuccessUpdate();
        } catch (error) {
            handleError();
        }
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

    const toggling = () => {
        if (modal) {
            setModal(false);
        } else {
            setModal(true);
        }
    };

    const handleConfirmText = (id) => {
        return MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ms-1'
            },
            buttonsStyling: false
        }).then(async function (result) {
            if (result.isConfirmed === true) {
                try {
                    const url = `contact/delete/${id}`;
                    const rs = await request(url, 'DELETE', true);
                    fetchTransaction();
                } catch (error) {
                    handleError()
                }
                MySwal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })
            }
        })
    }

    const makeChecked = (id) => {
        let checkAll = document.getElementById('checkAll');
        let checkOne = document.querySelectorAll('.checkOne');
        let rowId = document.querySelectorAll(".rowId");
        let rowIdNo = document.querySelectorAll(".rowIdNo");

        let id_checked = []
        let checkedArrNo = []


        let arr = []
        checkOne.forEach((e, i) => {
            if (checkAll.checked === true) {
                e.checked = true;
                refChecked.current.style.display = 'block';
            }
            // else {
            //     e.checked = false
            // }
            if (e.checked == true) {
                let itemx = id_checked.find(x => x == rowId[i].innerText);
                let itemn = checkedArrNo.find(x => x == rowIdNo[i].innerText);

                // checkArrNo
                if (!itemx) {
                    id_checked.unshift(parseInt(rowId[i].innerText))
                    console.log(checkArr, id_checked, 'add');
                }
                if (!itemn) {
                    checkedArrNo.unshift(rowIdNo[i].innerText)
                    console.log(check_number, checkedArrNo, 'addno');
                }
            }
            else {
                let itemx = id_checked.find(x => x == rowId[i].innerText);
                let itemn = checkedArrNo.find(x => x == rowIdNo[i].innerText);

                if (itemx) {
                    console.log(i, rowId[i].innerText);
                    id_checked.splice(i, 1);
                    console.log(checkArr, id_checked, 'remove')
                }
                if (itemn) {
                    console.log(i, rowId[i].innerText);
                    checkedArrNo.splice(i, 1);
                    console.log(check_number, checkedArrNo, 'removeno')
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
        setCheck_number(checkedArrNo)
    }
    useEffect(() => {
        fetchTransaction();
    }, [])
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
                                            <i className="ri-chat-forward-line align-bottom" onClick={() => toggling()}></i>
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
                                    <UncontrolledTooltip placement="top" target="Tooltip1"> Send Massages to Contacts </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="top" target="Tooltip2"> Add/Remove Contact To Group </UncontrolledTooltip>
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
                                            <th className="sort" data-sort="action">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="list form-check-all">
                                        {contacts.map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <input className="checkOne form-check-input" onClick={() => makeChecked(e.id)} type="checkbox" />
                                                        </div>
                                                    </th>
                                                    <td className="rowId d-none">{e.id}</td>
                                                    <td className="customer_name">{e.contactName}</td>
                                                    <td className="email">{e.email}</td>
                                                    <td className="rowIdNo phone">{e.phone}</td>
                                                    <td className="status"><span className="badge badge-soft-success text-uppercase">Subscribed</span></td>
                                                    <td>
                                                        <div className="hstack gap-3 flex-wrap">
                                                            <Link to="#" className="link-success fs-15"><i className="ri-edit-2-line" onClick={() => editContact(i)}></i></Link>
                                                            <Link to="#" className="link-danger fs-15" onClick={() => handleConfirmText(e.id)}><i className="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
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
            <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                <ModalHeader className="bg-light p-3">
                    Add Contact
                    <Button type="button" onClick={() => { setmodal_list(false); }} className="btn-close" aria-label="Close" >
                    </Button>
                </ModalHeader>
                <form>
                    <ModalBody>
                        <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                            <label htmlFor="id-field" className="form-label">ID</label>
                            <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                        </div>
                        <p className='text-danger'>{error}</p>
                        <div className="mb-3">
                            <label htmlFor="customername-field" className="form-label">Contact Name</label>
                            <input type="text" id="customername-field" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email-field" className="form-label">Email</label>
                            <input type="email" id="email-field" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone-field" className="form-label">Phone</label>
                            <input type="text" id="phone-field" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Phone no." required />
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-light" onClick={() => setmodal_list(false)}>Close</button>
                            {is_add === true && (
                                <button type="button" className="btn btn-success" id="add-btn" onClick={() => createContact()}>Add Customer</button>
                            )}
                            {is_edit === true && (
                                <button type="button" className="btn btn-success" id="edit-btn" onClick={() => updateContact()}>Update</button>
                            )}
                        </div>
                    </ModalFooter>
                </form>
            </Modal>
            {/* Add Modal */}
            <Modal isOpen={modal_group} toggle={() => { tog_group(); }} centered >
                <ModalHeader className="bg-light p-3">
                    Add Contact To Group
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
                            <button type="button" className="btn btn-success" id="add-btn" onClick={() => addContactToGroup()}>Add To Group</button>
                            <button type="button" className="btn btn-success" id="add-btn" onClick={() => removeContactFromGroup()}>Remove From Group</button>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>
            {/* Remove Modal */}
            <Modal Modal isOpen={modal_delete} toggle={() => { tog_delete(); }} className="modal fade zoomIn" id="deleteRecordModal" centered >
                <div className="modal-header">
                    <Button type="button" onClick={() => setmodal_delete(false)} className="btn-close" aria-label="Close"> </Button>
                </div>
                <ModalBody>
                    <div className="mt-2 text-center">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
                            colors="primary:#f7b84b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you Sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light" onClick={() => setmodal_delete(false)}>Close</button>
                        <button type="button" className="btn w-sm btn-danger " id="delete-record">Yes, Delete It!</button>
                    </div>
                </ModalBody>
            </Modal>
            <GroupMessage toggle={toggling} modal={modal} setModal={setModal} checkArr={check_number} />

        </React.Fragment >
    );
};

export default ListTables;
