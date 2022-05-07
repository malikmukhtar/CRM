import React, { useState } from 'react';
import {
    Modal, ModalBody,
    ModalFooter, ModalHeader, UncontrolledDropdown,
    DropdownItem, Input, DropdownToggle, DropdownMenu
} from 'reactstrap';
// Import Editors
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { request } from '../../services/utilities';
import { TOKEN_COOKIE } from '../../services/constants';
import SSRStorage from '../../services/storage';

function GroupMessage({ toggle, modal, setModal, checkArr }) {
    const [body, setBody] = useState('');
    const [from, setFrom] = useState('');

    const sendGroupMessages = async () => {
        const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);
        const data = { body, from: from, recipient: checkArr, senderId: user.data.id };
        console.log(data);
        // try {
        //     const url = `message/send`;
        //     console.log(data)
        //     const rs = await request(url, 'POST', true, data);
        //     console.log(rs);
        //     setModal(false);

        // } catch (err) {
        //     console.log(err)
        // }
    }
    return (
        <div>
            <Modal id="composemodal" className="modal-lg" isOpen={modal} toggle={toggle} centered>
                <ModalHeader className="p-3 bg-light" toggle={toggle}>
                    New Message
                </ModalHeader>
                <ModalBody>
                    <div>
                        <div className="mb-3 position-relative">
                            <Input
                                type="text"
                                className="form-control email-compose-input"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />

                        </div>

                        <div className="mb-3">
                            {/* <Input type="text" className="form-control" placeholder="Subject" /> */}
                        </div>
                        <div className="ck-editor-reverse">
                            <Input type='textarea' value={body} onChange={(e) => setBody(e.target.value)} className="form-control h-75" placeholder="Subject" />
                        </div>
                    </div>
                </ModalBody>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-ghost-danger"
                        onClick={() => {
                            setModal(false);
                        }}
                    >
                        Discard
                    </button>

                    <UncontrolledDropdown className="btn-group">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                sendGroupMessages()
                            }}
                        >
                            Send
                        </button>
                        <DropdownToggle
                            tag="button"
                            type="button"
                            className="btn btn-success"
                            split
                        >
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <li>
                                <DropdownItem href="#">
                                    <i className="ri-timer-line text-muted me-1 align-bottom"></i>{" "}
                                    Schedule Send
                                </DropdownItem>
                            </li>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </Modal>
        </div>
    )
}

export default GroupMessage;
