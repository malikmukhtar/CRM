import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import SSRStorage from '../../services/storage';

import { TOKEN_COOKIE } from "../../services/constants";
import { logoutUser } from "../../store/actions";

//redux
const storage = new SSRStorage();

const Logout = (props) => {

  const logoutUser = async () => {
    storage.removeItem(TOKEN_COOKIE);
    const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);
    console.log(user)
  }

  useEffect(() => {
    logoutUser();
  }, []);

  if (logoutUser) {
    return <Redirect to="/auth-signin-cover" />;
  }

  return <></>;
};

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);