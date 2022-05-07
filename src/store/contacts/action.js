import {
    GET_CONTACT_LIST,
    CONTACT_RESPONSE_SUCCESS,
    CONTACT_RESPONSE_ERROR,
} from "./actionType";

// common success
export const ContactResponseSuccess = (actionType, data) => ({
    type: CONTACT_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const ContactResponseError = (actionType, error) => ({
    type: CONTACT_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const getContacts = () => ({
    type: GET_CONTACT_LIST,
});
