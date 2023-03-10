import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useDispatch } from "react-redux";
import { LOGIN } from "../actions/actionTypes";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN, username, password, navigate });
  };

  const user = (e) => {
    setUsername(e.target.value);
  };

  const pass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="loginCont">
      <div className="loginFrom">
        <Typography variant="h2">
          Login <LockOpenIcon />
        </Typography>
        <h2 className="grey">Welcome back! Please login to your account.</h2>
        <form onSubmit={login} className="forma">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <Typography variant="body2">Default user : user1</Typography>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={user}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <Typography variant="body2">Default password:12345</Typography>
            <input type="password" className="form-control" onChange={pass} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Check me out</label>
          </div>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            type="submit"
            value="Login"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
