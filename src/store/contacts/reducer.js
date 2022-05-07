import {
    GET_CONTACT_LIST,
    CONTACT_RESPONSE_SUCCESS,
    CONTACT_RESPONSE_ERROR,
} from "./actionType";




const INIT_STATE = {
    contactList: [],
};

const Contacts = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CONTACT_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case GET_CONTACT_LIST:
                    return {
                        ...state,
                        taskList: action.payload.data,
                    };

                default:
                    return { ...state };
            }

        case CONTACT_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case GET_CONTACT_LIST:
                    return {
                        ...state,
                        error: action.payload.error,
                    };

                default:
                    return { ...state };
            }

        case GET_CONTACT_LIST: {
            return {
                ...state,
            };
        }

        default:
            return { ...state };
    }
};

export default Contacts;