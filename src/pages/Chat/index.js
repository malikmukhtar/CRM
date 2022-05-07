import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  Button,
  UncontrolledTooltip,
  Input,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  Row,
  Col,
  Card,
  CardBody,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label
} from "reactstrap";
import BreadCrumb from '../../Components/Common/BreadCrumb';

import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom";
import { isEmpty, map } from "lodash";
import SimpleBar from "simplebar-react";

//Import Icons
import FeatherIcon from "feather-icons-react";
import PersonalInfo from "./PersonalInfo";
import { request } from "../../services/utilities";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  getDirectContact as onGetDirectContact,
  getMessages,
  getChannels as onGetChannels,
  addMessage as onAddMessage,
} from "../../store/actions";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import userDummayImage from "../../assets/images/users/user-dummy-img.jpg";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ListTables from "./ListTables";
import { LoaderGrow } from "../AdvanceUi/Loader/loader";
const MySwal = withReactContent(Swal)

const Chat = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  const [gname, setGname] = useState('');

  const [isInfoDetails, setIsInfoDetails] = useState(false);
  const [Chat_Box_Username, setChat_Box_Username] = useState("");
  const [Chat_Box_Image, setChat_Box_Image] = useState(avatar2);
  const [currentRoomId, setCurrentRoomId] = useState(1);
  const [groupId, setGroupId] = useState(null)
  const [modal, setModal] = useState(false);
  const [messageBox, setMessageBox] = useState(null);
  const [curMessage, setcurMessage] = useState("");
  const [search_Menu, setsearch_Menu] = useState(false);
  const [groups, setGroups] = useState([])
  const [contacts, setContacts] = useState([])


  const [meta, setMeta] = useState(null)
  const [loading, setLoading] = useState(false)
  const [settings_Menu, setsettings_Menu] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Henry Wells",
    isActive: true,
  });
  const [modal_center, setmodal_center] = useState(false);

  function tog_center() {
    setmodal_center(!modal_center);
  }
  const handleSuccess = () => {
    return MySwal.fire({
      title: 'Good job!',
      text: 'Appointment booked successfully!',
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
  const { chats, messages, channels } = useSelector((state) => ({
    chats: state.chat.chats,
    messages: state.chat.messages,
    channels: state.chat.channels,
  }));
  //Toggle Chat Box Menus
  const toggleSearch = () => {
    setsearch_Menu(!search_Menu);
  };

  //Info details offcanvas
  const toggleInfo = () => {
    setIsInfoDetails(!isInfoDetails);
  };

  const toggleSettings = () => {
    setsettings_Menu(!settings_Menu);
  };
  // fetch group
  const fetchGroup = useCallback(async () => {
    try {
      setLoading(true);
      const url = 'group/all';
      const rs = await request(url, 'GET', true);
      setGroups(rs)
      setChat_Box_Username(rs[0].groupName);
      setGroupId(rs[0].id);
      userChatOpen(rs[0].id, rs[0].groupName)
      setLoading(false)

    } catch (err) {
      setLoading(false);
      handleError();
      console.log(err)
    }
  }, [groupId])

  useEffect(() => {
    fetchGroup();
    // dispatch(onGetDirectContact());
    // dispatch(onGetChannels());
    // dispatch(getMessages(currentRoomId));
  }, [groupId]);
  const userChatOpen =
    // useCallback(
    async (id, groupName) => {
      setChat_Box_Username(groupName);
      // const idx = groupId !== null ? groupId : id;
      try {
        setLoading(true);
        const url = `group/${id}`;
        const rs = await request(url, 'GET');
        setContacts(rs.contacts);
        console.log(rs, 'contact by group');

        setLoading(false);
      } catch (error) {
        setLoading(false);
        handleError();
        console.log(error);
      }
      // setCurrentRoomId(roomId);
      // setChat_Box_Image(image);
      // dispatch(getMessages(roomId));
    }



  const addMessage = (roomId, sender) => {
    const message = {
      id: Math.floor(Math.random() * 100),
      roomId,
      sender,
      message: curMessage,
      createdAt: new Date(),
    };
    setcurMessage("");
    dispatch(onAddMessage(message));
    scrollToBottom(message);
  };
  const scrollToBottom = (message) => {
    if (message) {
      message.scrollTop = message.scrollHeight + 1000;
    }
  };


  const onKeyPress = (e) => {
    const { key, value } = e;
    if (key === "Enter") {
      setcurMessage(value);
      addMessage(currentRoomId, currentUser.name);
    }
  };
  const toggle = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  const createGroup = async () => {
    try {
      const data = { groupName: gname, description: gname }
      console.log(data)
      let url = 'group';
      const rs = await request(url, 'POST', true, data);
      tog_center();
      console.log(data, rs)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Groups | CRM</title>
        </MetaTags>
        <Container fluid = {true}>
          <BreadCrumb title="Groups" breadcrumbItem="Groups" />
        
          <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-3">
            <div className="chat-leftsidebar">
              <div className="px-4 pt-4 mb-4">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <h5 className="mb-4">Groups</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <UncontrolledTooltip placement="bottom" target="addcontact">
                      New Group
                    </UncontrolledTooltip>

                    <Button
                      color=""
                      id="addcontact"
                      className="btn btn-soft-success btn-sm"
                      onClick={() => tog_center()}
                    >
                      <i className="ri-add-line align-bottom"></i>
                    </Button>
                  </div>
                </div>
                <div className="search-box">
                  <input
                    type="text"
                    className="form-control bg-light border-light"
                    placeholder="Search here..."
                  />
                  <i className="ri-search-2-line search-icon"></i>
                </div>
              </div>

              <PerfectScrollbar
                className="chat-room-list"
              >
                <div className="d-flex align-items-center px-4 mb-2">
                  <div className="flex-grow-1">
                    <h4 className="mb-0 fs-11 text-muted text-uppercase">
                      Group Messages
                    </h4>
                  </div>
                  <div className="flex-shrink-0">
                    <UncontrolledTooltip placement="bottom" target="addnewmsg">
                      Group Messages
                    </UncontrolledTooltip>

                    <button
                      type="button"
                      id="addnewmsg"
                      className="btn btn-soft-success btn-sm"
                    >
                      <i className="ri-add-line align-bottom"></i>
                    </button>
                  </div>
                </div>

                <div className="chat-message-list">
                  <ul
                    className="list-unstyled chat-list chat-user-list"
                    id="userList"
                  >
                    {(groups || []).map((groups) => (
                      <li
                        key={groups.id}
                      // className={
                      //   currentRoomId === groups.roomId ? "active" : ""
                      // }
                      >
                        <Link
                          to="#"
                          onClick={(e) => {
                            userChatOpen(
                              groups.id,
                              groups.groupName,
                              // groups.status,
                              // groups.roomId,
                              // groups.image
                            );
                          }}
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                              <div className="avatar-xxs">
                                {groups.image ? (
                                  <img
                                    src={groups.image}
                                    className="rounded-circle img-fluid userprofile"
                                    alt=""
                                  />
                                ) : (
                                  <div
                                    className={
                                      "avatar-title rounded-circle bg-" +
                                      groups.bgColor +
                                      " userprofile"
                                    }
                                  >
                                    {groups.groupName.charAt(0)}
                                  </div>
                                )}
                              </div>
                              <span className="user-status"></span>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <p className="text-truncate mb-0">{groups.groupName}</p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </PerfectScrollbar>
            </div>

            <div className="user-chat w-100 overflow-hidden">
              <div className="chat-content d-lg-flex">
                <div className="w-100 overflow-hidden position-relative">
                  <div className="position-relative">
                    <div className="p-3 user-chat-topbar mb-2" >
                      <Row className="align-items-center">
                        <Col sm={4} xs={8}>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 d-block d-lg-none me-3">
                              <Link
                                to="#"
                                className="user-chat-remove fs-18 p-1"
                              >
                                <i className="ri-arrow-left-s-line align-bottom"></i>
                              </Link>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                  {Chat_Box_Image === undefined ? (
                                    <img
                                      src={userDummayImage}
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  ) : (
                                    <img
                                      src={Chat_Box_Image}
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  )}
                                  <span className="user-status"></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                  <h5 className="text-truncate mb-0 fs-16">
                                    <a
                                      className="text-reset username"
                                      data-bs-toggle="offcanvas"
                                      href="#userProfileCanvasExample"
                                      aria-controls="userProfileCanvasExample"
                                    >
                                      {Chat_Box_Username.toLocaleLowerCase()}
                                    </a>
                                  </h5>
                                  <p className="text-truncate text-muted fs-14 mb-0 userStatus">
                                    <small>Online</small>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col sm={8} xs={4}>
                          <ul className="list-inline user-chat-nav text-end mb-0">
                            <li className="list-inline-item m-0">
                              <UncontrolledTooltip placement="bottom" target="addgrpmsg">
                                Send Group Message
                              </UncontrolledTooltip>
                              <Button color="light" id="addgrpmsg" onClick={toggle} >
                                <i className="ri-chat-forward-line align-bottom"></i>
                              </Button>
                            </li>
                            <li className="list-inline-item m-0">
                              <Dropdown
                                isOpen={search_Menu}
                                toggle={toggleSearch}
                              >
                                <DropdownToggle
                                  className="btn btn-ghost-secondary btn-icon"
                                  tag="button"
                                >
                                  <FeatherIcon
                                    icon="search"
                                    className="icon-sm"
                                  />
                                </DropdownToggle>
                                <DropdownMenu className="p-0 dropdown-menu-end dropdown-menu-lg">
                                  <div className="p-2">
                                    <div className="search-box">
                                      <Input
                                        type="text"
                                        className="form-control bg-light border-light"
                                        placeholder="Search here..."
                                        id="searchMessage"
                                      />
                                      <i className="ri-search-2-line search-icon"></i>
                                    </div>
                                  </div>
                                </DropdownMenu>
                              </Dropdown>
                            </li>

                            <li className="list-inline-item d-none d-lg-inline-block m-0">
                              <button
                                type="button"
                                className="btn btn-ghost-secondary btn-icon"
                                onClick={toggleInfo}
                              >
                                <FeatherIcon icon="info" className="icon-sm" />
                              </button>
                            </li>

                            <li className="list-inline-item m-0">
                              <Dropdown
                                isOpen={settings_Menu}
                                toggle={toggleSettings}
                              >
                                <DropdownToggle
                                  className="btn btn-ghost-secondary btn-icon"
                                  tag="button"
                                >
                                  <FeatherIcon
                                    icon="more-vertical"
                                    className="icon-sm"
                                  />
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem
                                    href="#"
                                    className="d-block d-lg-none user-profile-show"
                                  >
                                    <i className="ri-user-2-fill align-bottom text-muted me-2"></i>{" "}
                                    View Profile
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    <i className="ri-inbox-archive-line align-bottom text-muted me-2"></i>{" "}
                                    Archive
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    <i className="ri-mic-off-line align-bottom text-muted me-2"></i>{" "}
                                    Muted
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    {" "}
                                    <i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i>{" "}
                                    Delete
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <ListTables
                      groupId={groupId}
                      contacts={contacts}
                      toggle={toggle}
                      modal={modal}
                      setModal={setModal}
                      groupName={Chat_Box_Username}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <>{loading === true ? <LoaderGrow /> : ''}</>
      <PersonalInfo
        show={isInfoDetails}
        onCloseClick={() => setIsInfoDetails(false)}
        currentuser={Chat_Box_Username}
        cuurentiseImg={Chat_Box_Image}
      />

      <Modal
        isOpen={modal_center}
        toggle={() => {
          tog_center();
        }}
        centered
      >
        <ModalHeader>
          <h5 className="modal-title" id="myModalLabel">New Group</h5>
          <Button type="button" className="btn-close"
            onClick={() => { setmodal_center(false) }}
            aria-label="Close"
          >
          </Button>
        </ModalHeader>
        <form>
          <ModalBody>
            <Col xxl={12} md={12}>
              <div>
                <Label htmlFor="basiInput" className="form-label">Group Name</Label>
                <Input type="text" className="form-control" value={gname} onChange={(e) => setGname(e.target.value)} id="basiInput" />
              </div>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button
              color="light"
              onClick={() => {
                tog_center();
              }}
            >
              Close
            </Button>
            <Button
              color="primary"
              type="button"
              onClick={() => createGroup()}
            >
              Create new group
            </Button>
          </ModalFooter>
        </form>
      </Modal>

    </React.Fragment>
  );
};

export default Chat;
